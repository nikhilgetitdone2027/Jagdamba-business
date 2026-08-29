import React from 'react';
import { SectionHeading } from './SectionHeading';
import { businessData } from '../data/business';
import {
  PhoneCall,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Send,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${businessData.whatsappNumber}?text=${encodeURIComponent(
    businessData.whatsappDefaultMessage
  )}`;

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#140204] text-[#FFFDD0] relative overflow-hidden dark-dot-pattern">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#5D0E11]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Get in Touch"
          title="LET'S PLAN YOUR CELEBRATION"
          subtitle="Speak directly with our team to reserve your wedding date, customize your banquet menu, and discuss venue decoration."
          theme="dark"
        />

        {/* 4 Large Action CTA Buttons Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {/* CALL NOW */}
          <a
            id="contact-call-btn"
            href={`tel:${businessData.primaryPhone}`}
            className="p-6 rounded-sm bg-[#5D0E11] border-2 border-[#D4AF37] hover:border-[#FFFDD0] shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-full bg-[#140204] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mb-4 shadow-md group-hover:scale-110 transition-transform">
              <PhoneCall className="w-7 h-7" />
            </div>
            <span className="font-cinzel text-lg font-bold text-[#FFFDD0] group-hover:text-[#D4AF37] transition-colors">
              CALL NOW
            </span>
            <span className="text-xs font-semibold text-[#FFFDD0]/90 mt-1">
              +91 91137 80293
            </span>
            <span className="text-[11px] text-[#FFFDD0]/70 mt-0.5">
              +91 96930 70308
            </span>
            <div className="mt-4 px-4 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider text-[#5D0E11] bg-[#D4AF37] group-hover:bg-[#FFFDD0] transition-colors">
              Direct Phone Call
            </div>
          </a>

          {/* WHATSAPP */}
          <a
            id="contact-whatsapp-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-sm bg-[#140204] border-2 border-emerald-500/80 hover:border-emerald-400 shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-full bg-emerald-950 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 mb-4 shadow-md group-hover:scale-110 transition-transform">
              <MessageSquare className="w-7 h-7" />
            </div>
            <span className="font-cinzel text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
              WHATSAPP
            </span>
            <span className="text-xs font-semibold text-emerald-100/90 mt-1">
              Chat for Menus & Quotes
            </span>
            <span className="text-[11px] text-emerald-200/70 mt-0.5">
              Instant Inquiry & Brochure
            </span>
            <div className="mt-4 px-4 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider text-[#0B170D] bg-emerald-400 group-hover:bg-emerald-300 transition-colors">
              Start WhatsApp Chat
            </div>
          </a>

          {/* EMAIL */}
          <a
            id="contact-email-btn"
            href={`mailto:${businessData.email}?subject=${encodeURIComponent('Event Catering & Planning Inquiry - Jagdamba Caterer')}`}
            className="p-6 rounded-sm bg-[#5D0E11] border-2 border-[#D4AF37] hover:border-[#FFFDD0] shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-full bg-[#140204] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mb-4 shadow-md group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7" />
            </div>
            <span className="font-cinzel text-lg font-bold text-[#FFFDD0] group-hover:text-[#D4AF37] transition-colors">
              EMAIL
            </span>
            <span className="text-xs font-semibold text-[#FFFDD0]/90 mt-1 break-all max-w-[200px]">
              {businessData.email}
            </span>
            <span className="text-[11px] text-[#FFFDD0]/70 mt-0.5">
              Event Details & Proposals
            </span>
            <div className="mt-4 px-4 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider text-[#5D0E11] bg-[#D4AF37] group-hover:bg-[#FFFDD0] transition-colors">
              Send Email
            </div>
          </a>

          {/* GET DIRECTIONS */}
          <a
            id="contact-directions-btn"
            href={businessData.location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-sm bg-[#5D0E11] border-2 border-[#D4AF37] hover:border-[#FFFDD0] shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-full bg-[#140204] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mb-4 shadow-md group-hover:scale-110 transition-transform">
              <MapPin className="w-7 h-7" />
            </div>
            <span className="font-cinzel text-lg font-bold text-[#FFFDD0] group-hover:text-[#D4AF37] transition-colors">
              GET DIRECTIONS
            </span>
            <span className="text-xs font-semibold text-[#FFFDD0]/90 mt-1">
              {businessData.location.area}, {businessData.location.city}
            </span>
            <span className="text-[11px] text-[#FFFDD0]/70 mt-0.5">
              {businessData.location.state}
            </span>
            <div className="mt-4 px-4 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider text-[#5D0E11] bg-[#D4AF37] group-hover:bg-[#FFFDD0] flex items-center gap-1 transition-colors">
              <span>Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </div>
          </a>
        </div>

        {/* Detailed Address & Office Information Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Location Details Card */}
          <div className="lg:col-span-6 rounded-sm bg-[#5D0E11] p-6 sm:p-8 border-2 border-[#D4AF37] shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#D4AF37]/40">
                <div className="p-3 rounded-sm bg-[#140204] text-[#D4AF37] border border-[#D4AF37]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] block">
                    Official Head Office
                  </span>
                  <h4 className="font-cinzel text-xl font-bold text-[#FFFDD0]">
                    Jagdamba Caterer & Event Planner
                  </h4>
                </div>
              </div>

              {/* Address Lines */}
              <div className="space-y-3 text-sm text-[#FFFDD0]/90 mb-6">
                <div className="flex items-start gap-3">
                  <span className="font-cinzel font-bold text-[#D4AF37] shrink-0">Address:</span>
                  <span className="text-[#FFFDD0] font-medium leading-relaxed">
                    {businessData.location.addressLine1},<br />
                    {businessData.location.area}, {businessData.location.city},<br />
                    {businessData.location.state}
                  </span>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <span className="font-cinzel font-bold text-[#D4AF37] shrink-0">Phones:</span>
                  <div className="space-y-1">
                    {businessData.phones.map((phone, i) => (
                      <a
                        key={i}
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="block text-[#FFFDD0] hover:text-[#D4AF37] transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <span className="font-cinzel font-bold text-[#D4AF37] shrink-0">Email:</span>
                  <a
                    href={`mailto:${businessData.email}`}
                    className="text-[#FFFDD0] hover:text-[#D4AF37] transition-colors"
                  >
                    {businessData.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Service Areas Tag Strip */}
            <div className="pt-4 border-t border-[#D4AF37]/30">
              <span className="text-xs text-[#D4AF37] block mb-2 font-bold uppercase tracking-wider">
                Serving Destinations Across:
              </span>
              <div className="flex flex-wrap gap-2">
                {businessData.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-2.5 py-1 rounded-sm text-xs font-semibold bg-[#140204] text-[#D4AF37] border border-[#D4AF37]/40"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Embedded Map Representation */}
          <div className="lg:col-span-6 rounded-sm overflow-hidden bg-[#5D0E11] border-2 border-[#D4AF37] shadow-2xl relative flex flex-col">
            <div className="p-4 bg-[#140204] border-b border-[#D4AF37]/50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs font-bold font-cinzel text-[#FFFDD0]">
                  Location Map — Chirkunda, Dhanbad
                </span>
              </div>
              <a
                href={businessData.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Map Iframe embed with clean fallback */}
            <div className="relative flex-1 min-h-[280px] bg-[#140204]">
              <iframe
                title="Jagdamba Caterer Location Map"
                src="https://maps.google.com/maps?q=Sonar%20Dangal,%20Chirkunda,%20Dhanbad,%20Jharkhand&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter contrast-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
