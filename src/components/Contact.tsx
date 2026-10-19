import React, { useState } from 'react';
import { COMPANY_DATA } from '../data/company';
import { Mail, CheckCircle2, AlertCircle, ArrowUpRight, Send, RefreshCw } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  serviceType: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  serviceType?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    serviceType: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Nama lengkap wajib diisi.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Nama minimal 2 karakter.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Alamat email wajib diisi.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Format email tidak valid (contoh: user@domain.com).';
    }

    if (!formData.serviceType || formData.serviceType === '') {
      newErrors.serviceType = 'Silakan pilih jenis kebutuhan atau layanan.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Pesan atau rincian proyek wajib diisi.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Pesan minimal 10 karakter agar kami dapat memahami kebutuhan Anda.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      serviceType: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  // Generate mailto link
  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(
      formData.serviceType
        ? `[Inquiry] ${formData.serviceType} - ${formData.fullName || 'Client'}`
        : 'Inquiry Kerjasama PT Indo Kreasi'
    );
    const body = encodeURIComponent(
      `Halo Tim PT Indo Kreasi,\n\nNama: ${formData.fullName || '-'}\nEmail: ${
        formData.email || '-'
      }\nKebutuhan: ${formData.serviceType || '-'}\n\nPesan:\n${
        formData.message || '-'
      }\n\nSalam,\n${formData.fullName || ''}`
    );
    return `mailto:${COMPANY_DATA.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-[#060B14] border-t border-[#1E293B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-widest">
            <span className="w-2 h-2 bg-[#2563EB]" />
            <span>KOLABORASI & KONTAK</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl text-[#F0F9FF] tracking-wide">
            LET'S CREATE SOMETHING EPIC
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            Apakah Anda memiliki konsep game yang ingin diwujudkan, membutuhkan aset pixel art berkualitas tinggi, atau ingin mendiskusikan peluang kerjasama strategis? Diskusikan bersama tim kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Communication */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0B132B] border border-[#1E293B] p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider">
                <Mail size={16} className="text-[#38BDF8]" />
                <span>KOMUNIKASI RESMI</span>
              </div>
              <h3 className="font-pixel text-sm text-[#F0F9FF]">
                DIRECT EMAIL INQUIRY
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Anda dapat langsung menghubungi kami melalui email resmi atau mengklik tombol di bawah untuk membuka aplikasi email favorit Anda.
              </p>

              <div className="p-3 bg-[#060B14] border border-[#1E293B] font-mono text-xs sm:text-sm text-[#38BDF8] flex items-center justify-between">
                <span>{COMPANY_DATA.contactEmail}</span>
              </div>

              <a
                href={generateMailtoUrl()}
                className="w-full py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-[#F0F9FF] font-pixel text-xs tracking-wider border border-[#38BDF8] pixel-btn-primary flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>BUKA APLIKASI EMAIL</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Client-Side Demo Transparency Notice */}
            <div className="bg-[#0B132B]/60 border border-[#1E293B] p-5 space-y-2 text-xs font-mono text-[#94A3B8]">
              <div className="flex items-center gap-2 text-[#38BDF8]">
                <AlertCircle size={14} />
                <span className="font-semibold">CATATAN PENGIRIMAN:</span>
              </div>
              <p className="leading-relaxed">
                Website ini berjalan tanpa server backend. Formulir ini menjalankan validasi frontend secara nyata. Untuk pengiriman pesan nyata ke studio, gunakan tombol email langsung di atas.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0B132B] border-2 border-[#1E293B] p-6 sm:p-8 relative">
              
              {/* Form Window Titlebar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1E293B] text-[10px] font-mono text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#2563EB]" />
                  <span>TRANSMISSION_TERMINAL // CLIENT_INQUIRY</span>
                </div>
                <span>STATUS: READY</span>
              </div>

              {isSubmitted && submittedData ? (
                /* Success State (Frontend Validation Confirmed) */
                <div className="space-y-6 py-4">
                  <div className="bg-[#060B14] border-2 border-[#2563EB] p-6 space-y-4 text-center">
                    <CheckCircle2 size={36} className="text-[#38BDF8] mx-auto" />
                    <h3 className="font-pixel text-sm sm:text-base text-[#F0F9FF]">
                      VALIDASI FORMULIR BERHASIL!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
                      Terima kasih, <strong className="text-[#F0F9FF]">{submittedData.fullName}</strong>. Seluruh data input Anda telah tervalidasi dengan benar di sisi client.
                    </p>
                    
                    {/* Summary of validated input */}
                    <div className="p-4 bg-[#0B132B] border border-[#1E293B] text-left text-xs font-mono space-y-2">
                      <div className="flex justify-between border-b border-[#1E293B] pb-1">
                        <span className="text-[#94A3B8]">Nama:</span>
                        <span className="text-[#F0F9FF]">{submittedData.fullName}</span>
                      </div>
                      <div className="flex justify-between border-b border-[#1E293B] pb-1">
                        <span className="text-[#94A3B8]">Email:</span>
                        <span className="text-[#38BDF8]">{submittedData.email}</span>
                      </div>
                      <div className="flex justify-between border-b border-[#1E293B] pb-1">
                        <span className="text-[#94A3B8]">Kebutuhan:</span>
                        <span className="text-[#F0F9FF]">{submittedData.serviceType}</span>
                      </div>
                      <div className="pt-1">
                        <span className="text-[#94A3B8] block mb-1">Rincian Pesan:</span>
                        <p className="text-[#94A3B8] italic">"{submittedData.message}"</p>
                      </div>
                    </div>

                    <p className="text-[11px] font-mono text-[#94A3B8]">
                      (Sebagai website tanpa server backend, data di atas tidak disimpan ke database. Anda dapat mengirimkan draf ini via tombol email resmi.)
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center">
                    <a
                      href={generateMailtoUrl()}
                      className="px-5 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-[#F0F9FF] font-pixel text-xs tracking-wider border border-[#38BDF8] pixel-btn-primary flex items-center gap-2 cursor-pointer"
                    >
                      <Mail size={14} />
                      <span>KIRIM VIA APLIKASI EMAIL</span>
                    </a>

                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 bg-[#060B14] hover:bg-[#111C3D] text-[#94A3B8] hover:text-[#F0F9FF] font-pixel text-xs tracking-wider border border-[#1E293B] flex items-center gap-2 cursor-pointer"
                    >
                      <RefreshCw size={14} />
                      <span>ISI FORMULIR LAGI</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-mono text-[#F0F9FF] uppercase tracking-wider"
                    >
                      Nama Lengkap <span className="text-[#38BDF8]">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Masukkan nama Anda atau studio"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 bg-[#060B14] text-[#F0F9FF] text-sm font-sans border transition-colors focus:outline-none ${
                        errors.fullName
                          ? 'border-red-500 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                          : 'border-[#1E293B] focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-400 font-mono mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono text-[#F0F9FF] uppercase tracking-wider"
                    >
                      Alamat Email <span className="text-[#38BDF8]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="contoh: nama@domain.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 bg-[#060B14] text-[#F0F9FF] text-sm font-sans border transition-colors focus:outline-none ${
                        errors.email
                          ? 'border-red-500 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                          : 'border-[#1E293B] focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 font-mono mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Service Type Selection */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="serviceType"
                      className="block text-xs font-mono text-[#F0F9FF] uppercase tracking-wider"
                    >
                      Jenis Kebutuhan / Layanan <span className="text-[#38BDF8]">*</span>
                    </label>
                    <select
                      id="serviceType"
                      value={formData.serviceType}
                      onChange={(e) => {
                        setFormData({ ...formData, serviceType: e.target.value });
                        if (errors.serviceType) setErrors({ ...errors, serviceType: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 bg-[#060B14] text-[#F0F9FF] text-sm font-sans border transition-colors focus:outline-none ${
                        errors.serviceType
                          ? 'border-red-500 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                          : 'border-[#1E293B] focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]'
                      }`}
                    >
                      <option value="" disabled className="bg-[#060B14] text-[#94A3B8]">
                        -- Pilih Jenis Kebutuhan --
                      </option>
                      {COMPANY_DATA.inquiryTypes.map((type, idx) => (
                        <option key={idx} value={type} className="bg-[#060B14] text-[#F0F9FF]">
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.serviceType && (
                      <p className="text-xs text-red-400 font-mono mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.serviceType}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono text-[#F0F9FF] uppercase tracking-wider"
                    >
                      Pesan atau Deskripsi Proyek <span className="text-[#38BDF8]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Jelaskan gambaran proyek, target platform, timeframe, atau ide yang ingin dikembangkan..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 bg-[#060B14] text-[#F0F9FF] text-sm font-sans border transition-colors focus:outline-none resize-y ${
                        errors.message
                          ? 'border-red-500 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                          : 'border-[#1E293B] focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 font-mono mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-[#F0F9FF] font-pixel text-xs tracking-wider border border-[#38BDF8] pixel-btn-primary flex items-center justify-center gap-2 cursor-pointer uppercase transition-all"
                    >
                      <Send size={14} />
                      <span>SEND MESSAGE</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
