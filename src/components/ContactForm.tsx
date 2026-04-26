import { useState, type FormEvent } from 'react';

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="14" height="14"><path d="M4 12h16M14 6l6 6-6 6" /></svg>
);
const Check = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width={size} height={size}><path d="m4 12 5 5L20 6" /></svg>
);

type Status = 'idle' | 'sending' | 'sent' | 'error';

type FormState = {
  name: string;
  phone: string;
  device: string;
  brand: string;
  issue: string;
  when: string;
};

const INITIAL: FormState = { name: '', phone: '', device: 'TV', brand: '', issue: '', when: 'L–V 17–21h' };

function FormField({ n, label, children }: { n: string; label: string; children: React.ReactNode }) {
  return (
    <label className="ff">
      <span className="ff-lbl"><em>{n}</em>{label}</span>
      {children}
    </label>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const sent = status === 'sent';
  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('https://formsubmit.co/ajax/david@dasat.es', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `[DASAT MOBILE] Solicitud de presupuesto · ${form.device} ${form.brand || ''}`.trim(),
          _template: 'table',
          _captcha: 'false',
          Nombre: form.name,
          Teléfono: form.phone,
          'Tipo de equipo': form.device,
          'Marca / modelo': form.brand,
          'Descripción de la avería': form.issue,
          'Franja preferida': form.when,
          Origen: 'dasat.es · formulario web',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && (data.success === 'true' || data.success === true)) {
        setStatus('sent');
      } else {
        throw new Error(data.message || 'No se pudo enviar el formulario.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Error de red. Revisa tu conexión e inténtalo de nuevo.');
    }
  };

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-bar">
        <span>SOLICITUD DE PRESUPUESTO</span>
        <span>REQ-{String(Date.now()).slice(-6)}</span>
        <span className={sent ? 'st on' : (status === 'sending' ? 'st sending' : (status === 'error' ? 'st err' : 'st'))}>
          {sent ? '● ENVIADO' : status === 'sending' ? '● ENVIANDO…' : status === 'error' ? '● ERROR' : '○ NUEVO'}
        </span>
      </div>
      <p className="form-intro">
        <b>Presupuesto sin coste si aceptas la reparación.</b> Te lo damos por escrito antes de tocar el equipo.
        Si solo quieres una valoración orientativa (sin compromiso de reparar), aplicamos una pequeña tasa de diagnóstico que se descuenta si finalmente reparas.
      </p>

      {sent ? (
        <div className="form-sent">
          <Check size={56} />
          <h3>Solicitud registrada</h3>
          <p>David te contactará por WhatsApp o por correo en menos de 24h hábiles.</p>
          <button type="button" className="btn-line"
            onClick={() => { setStatus('idle'); setForm(INITIAL); }}>
            Enviar otra solicitud
          </button>
        </div>
      ) : (
        <>
          {status === 'error' && (
            <div className="form-err" role="alert">
              <b>No se pudo enviar.</b> {errorMsg} <br/>
              Si el problema persiste, escríbenos directamente a <a href="mailto:david@dasat.es">david@dasat.es</a> o por <a href="https://wa.me/34000000000" target="_blank" rel="noreferrer">WhatsApp</a>.
            </div>
          )}
          <FormField n="01" label="Nombre y apellidos">
            <input required type="text" value={form.name} onChange={set('name')} placeholder="Juan García" />
          </FormField>
          <FormField n="02" label="Teléfono / WhatsApp">
            <input required type="tel" value={form.phone} onChange={set('phone')} placeholder="+34 ___ ___ ___" />
          </FormField>
          <div className="form-2">
            <FormField n="03" label="Tipo de equipo">
              <select value={form.device} onChange={set('device')}>
                <option>TV</option>
                <option>Placa electrónica</option>
                <option>Consola</option>
                <option>Portátil</option>
                <option>Tablet</option>
                <option>Otro</option>
              </select>
            </FormField>
            <FormField n="04" label="Marca / modelo">
              <input type="text" value={form.brand} onChange={set('brand')} placeholder="Samsung QE55Q70A" />
            </FormField>
          </div>
          <FormField n="05" label="Descripción de la avería">
            <textarea required rows={4} value={form.issue} onChange={set('issue')} placeholder="¿Cuándo empezó? ¿Hace ruido, no enciende, imagen rota…?" />
          </FormField>
          <FormField n="06" label="Franja preferida">
            <div className="radio-row">
              {['L–V 10–14h','L–V 17–21h','indiferente'].map((v) => (
                <label key={v} className={form.when === v ? 'on' : ''}>
                  <input type="radio" name="when" value={v} checked={form.when === v} onChange={set('when')} />
                  <span>{v}</span>
                </label>
              ))}
            </div>
          </FormField>
          <button type="submit" className="btn-solid lg w" disabled={status === 'sending'}>
            {status === 'sending' ? 'Enviando…' : <>Enviar solicitud <Arrow /></>}
          </button>
          <p className="form-fine">
            Al enviar aceptas que te contactemos para coordinar la cita. No spam.
          </p>
        </>
      )}
    </form>
  );
}
