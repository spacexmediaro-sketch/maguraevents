'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Send, Loader2 } from 'lucide-react';
import { contactSchema, type ContactFormData } from '@/lib/validation';

const tipEvenimentOptions = [
  { value: 'nunta',         label: 'Nuntă' },
  { value: 'botez',         label: 'Botez' },
  { value: 'majorat',       label: 'Majorat' },
  { value: 'zi-nastere',    label: 'Zi de naștere' },
  { value: 'corporate',     label: 'Eveniment corporate' },
  { value: 'alt-eveniment', label: 'Alt eveniment' },
];

const salonOptions = [
  { value: 'salon-1', label: 'Salon Crystal (80–250 pers.)' },
  { value: 'salon-2', label: 'Salon Royal (150–450 pers.)' },
  { value: 'oricare', label: 'Oricare salon disponibil' },
];

const meniuOptions = [
  { value: 'meniu-nunta',        label: 'Meniu nuntă' },
  { value: 'meniu-botez',        label: 'Meniu botez' },
  { value: 'meniu-majorat',      label: 'Meniu majorat' },
  { value: 'meniu-corporate',    label: 'Meniu corporate' },
  { value: 'meniu-personalizat', label: 'Meniu personalizat' },
  { value: 'necunoscut',         label: 'Nu știu încă' },
];

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? 'Eroare la trimiterea mesajului');
      }

      setSubmitStatus('success');
      reset();
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'A apărut o eroare. Vă rugăm încercați din nou.');
    }
  };

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center text-center py-20 px-8"
      >
        <CheckCircle2 size={56} className="text-gold-600 mb-6" />
        <h3 className="font-serif text-3xl font-light text-cream-100 mb-4">
          Cerere trimisă cu succes!
        </h3>
        <p className="font-sans text-cream-400 mb-8 max-w-md" style={{ lineHeight: 1.8 }}>
          Mulțumim pentru cererea dumneavoastră. Echipa noastră vă va contacta în maximum 24 de ore pentru a discuta detaliile evenimentului.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="btn-outline-gold"
        >
          <span>Trimite o altă cerere</span>
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Formular cerere ofertă Măgura Events"
      className="space-y-8"
    >
      {/* Error banner */}
      <AnimatePresence>
        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0 }}
            className="flex items-start gap-3 p-4 border border-red-500/30 bg-red-500/5"
            role="alert"
          >
            <AlertCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
            <p className="font-sans text-sm text-red-400">{errorMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Row 1: Nume + Telefon */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="numePrenume" className="label-luxury">
            Nume și prenume <span className="text-gold-600">*</span>
          </label>
          <input
            id="numePrenume"
            type="text"
            autoComplete="name"
            placeholder="ex: Maria Ionescu"
            className="input-luxury"
            aria-required="true"
            aria-invalid={!!errors.numePrenume}
            {...register('numePrenume')}
          />
          {errors.numePrenume && (
            <p className="mt-1.5 text-xs text-red-400 font-sans" role="alert">
              {errors.numePrenume.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="telefon" className="label-luxury">
            Telefon <span className="text-gold-600">*</span>
          </label>
          <input
            id="telefon"
            type="tel"
            autoComplete="tel"
            placeholder="ex: 0722 123 456"
            className="input-luxury"
            aria-required="true"
            aria-invalid={!!errors.telefon}
            {...register('telefon')}
          />
          {errors.telefon && (
            <p className="mt-1.5 text-xs text-red-400 font-sans" role="alert">
              {errors.telefon.message}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="label-luxury">
          Email <span className="text-gold-600">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="ex: maria@email.ro"
          className="input-luxury"
          aria-required="true"
          aria-invalid={!!errors.email}
          {...register('email')}
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-red-400 font-sans" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Row: Tip eveniment + Nr invitati */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="tipEveniment" className="label-luxury">
            Tip eveniment <span className="text-gold-600">*</span>
          </label>
          <select
            id="tipEveniment"
            className="input-luxury appearance-none cursor-pointer"
            aria-required="true"
            aria-invalid={!!errors.tipEveniment}
            {...register('tipEveniment')}
            style={{ background: 'transparent' }}
          >
            <option value="" disabled selected className="bg-noir-700">
              Selectați tipul
            </option>
            {tipEvenimentOptions.map((o) => (
              <option key={o.value} value={o.value} className="bg-noir-700">
                {o.label}
              </option>
            ))}
          </select>
          {errors.tipEveniment && (
            <p className="mt-1.5 text-xs text-red-400 font-sans" role="alert">
              {errors.tipEveniment.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="nrInvitati" className="label-luxury">
            Nr. estimativ invitați <span className="text-gold-600">*</span>
          </label>
          <input
            id="nrInvitati"
            type="number"
            min="1"
            max="1000"
            placeholder="ex: 150"
            className="input-luxury"
            aria-required="true"
            aria-invalid={!!errors.nrInvitati}
            {...register('nrInvitati')}
          />
          {errors.nrInvitati && (
            <p className="mt-1.5 text-xs text-red-400 font-sans" role="alert">
              {errors.nrInvitati.message}
            </p>
          )}
        </div>
      </div>

      {/* Row: Data + Salon */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="dataEveniment" className="label-luxury">
            Data dorită <span className="text-gold-600">*</span>
          </label>
          <input
            id="dataEveniment"
            type="date"
            className="input-luxury"
            aria-required="true"
            aria-invalid={!!errors.dataEveniment}
            {...register('dataEveniment')}
            style={{ colorScheme: 'dark' }}
          />
          {errors.dataEveniment && (
            <p className="mt-1.5 text-xs text-red-400 font-sans" role="alert">
              {errors.dataEveniment.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="salonPreferat" className="label-luxury">
            Salon preferat <span className="text-gold-600">*</span>
          </label>
          <select
            id="salonPreferat"
            className="input-luxury appearance-none cursor-pointer"
            aria-required="true"
            aria-invalid={!!errors.salonPreferat}
            {...register('salonPreferat')}
            style={{ background: 'transparent' }}
          >
            <option value="" disabled selected className="bg-noir-700">
              Selectați salonul
            </option>
            {salonOptions.map((o) => (
              <option key={o.value} value={o.value} className="bg-noir-700">
                {o.label}
              </option>
            ))}
          </select>
          {errors.salonPreferat && (
            <p className="mt-1.5 text-xs text-red-400 font-sans" role="alert">
              {errors.salonPreferat.message}
            </p>
          )}
        </div>
      </div>

      {/* Row: Meniu + Buget */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="tipMeniu" className="label-luxury">
            Tip meniu dorit
          </label>
          <select
            id="tipMeniu"
            className="input-luxury appearance-none cursor-pointer"
            {...register('tipMeniu')}
            style={{ background: 'transparent' }}
          >
            <option value="" className="bg-noir-700">Selectați meniu (opțional)</option>
            {meniuOptions.map((o) => (
              <option key={o.value} value={o.value} className="bg-noir-700">
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="bugetEstimativ" className="label-luxury">
            Buget estimativ (opțional)
          </label>
          <input
            id="bugetEstimativ"
            type="text"
            placeholder="ex: 20.000 RON"
            className="input-luxury"
            {...register('bugetEstimativ')}
          />
        </div>
      </div>

      {/* Mesaj */}
      <div>
        <label htmlFor="mesaj" className="label-luxury">
          Mesaj / detalii suplimentare
        </label>
        <textarea
          id="mesaj"
          rows={4}
          placeholder="Descrieți viziunea dumneavoastră pentru eveniment, preferințe speciale, întrebări..."
          className="input-luxury resize-none"
          {...register('mesaj')}
        />
        {errors.mesaj && (
          <p className="mt-1.5 text-xs text-red-400 font-sans" role="alert">
            {errors.mesaj.message}
          </p>
        )}
      </div>

      {/* GDPR checkboxes */}
      <div className="space-y-4 py-4 border-t border-gold-600/10">
        <div className="flex items-start gap-3">
          <input
            id="gdprAccept"
            type="checkbox"
            className="mt-1 w-4 h-4 appearance-none border border-gold-600/40 checked:bg-gold-600 checked:border-gold-600 cursor-pointer flex-shrink-0"
            aria-required="true"
            aria-invalid={!!errors.gdprAccept}
            {...register('gdprAccept')}
          />
          <label htmlFor="gdprAccept" className="font-sans text-xs text-cream-500 cursor-pointer" style={{ lineHeight: 1.7 }}>
            Am citit și sunt de acord cu{' '}
            <a href="/confidentialitate" className="text-gold-600 underline hover:text-gold-500">
              Politica de confidențialitate
            </a>{' '}
            și{' '}
            <a href="/gdpr" className="text-gold-600 underline hover:text-gold-500">
              Politica GDPR
            </a>.{' '}
            Înțeleg că datele mele vor fi prelucrate conform legislației în vigoare. <span className="text-gold-600">*</span>
          </label>
        </div>
        {errors.gdprAccept && (
          <p className="text-xs text-red-400 font-sans" role="alert">{errors.gdprAccept.message}</p>
        )}

        <div className="flex items-start gap-3">
          <input
            id="acordContactare"
            type="checkbox"
            className="mt-1 w-4 h-4 appearance-none border border-gold-600/40 checked:bg-gold-600 checked:border-gold-600 cursor-pointer flex-shrink-0"
            aria-required="true"
            aria-invalid={!!errors.acordContactare}
            {...register('acordContactare')}
          />
          <label htmlFor="acordContactare" className="font-sans text-xs text-cream-500 cursor-pointer" style={{ lineHeight: 1.7 }}>
            Sunt de acord să fiu contactat/ă de echipa Măgura Events prin telefon și email în vederea ofertării și prezentării serviciilor. <span className="text-gold-600">*</span>
          </label>
        </div>
        {errors.acordContactare && (
          <p className="text-xs text-red-400 font-sans" role="alert">{errors.acordContactare.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitStatus === 'loading'}
        className="btn-gold w-full justify-center py-5 text-sm"
        aria-busy={submitStatus === 'loading'}
      >
        {submitStatus === 'loading' ? (
          <span className="flex items-center gap-3">
            <Loader2 size={16} className="animate-spin" />
            <span>Se trimite...</span>
          </span>
        ) : (
          <span className="flex items-center gap-3">
            <Send size={16} />
            <span>Solicită Ofertă Personalizată</span>
          </span>
        )}
      </button>

      <p className="text-center font-sans text-xs text-cream-700" style={{ lineHeight: 1.6 }}>
        Datele dumneavoastră sunt în siguranță. Nu le vom partaja cu terți.
        <br />
        Vă vom răspunde în maximum 24 de ore.
      </p>
    </form>
  );
}
