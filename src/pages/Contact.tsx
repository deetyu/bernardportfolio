import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Linkedin } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const socialLinks = [
  {
    name: "Behance",
    handle: "behance.net/btm20",
    href: "https://www.behance.net/btm20",
  },
  {
    name: "LinkedIn",
    handle: "Bernardo Orozco",
    href: "https://www.linkedin.com/in/boboteme/",
  },
  {
    name: "Email",
    handle: "boboteme@gmail.com",
    href: "mailto:boboteme@gmail.com",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you within 2 business days.");
    setFormState({ name: "", email: "", projectType: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <p className="eyebrow mb-6">Contact</p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-ink mb-6">
                  Let's create something meaningful.
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg text-ink-light max-w-xl mb-8">
                  Open to senior brand & visual design roles and long-term identity system projects. Tell me what you're building and I'll get back to you within 2 business days.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="space-y-4 mb-12">
                  <a 
                    href="mailto:boboteme@gmail.com" 
                    className="flex items-center gap-3 text-ink hover:text-ink-light transition-colors duration-300"
                  >
                    <Mail size={18} strokeWidth={1.5} />
                    boboteme@gmail.com
                  </a>
                  <div className="flex items-center gap-3 text-ink-light">
                    <MapPin size={18} strokeWidth={1.5} />
                    Guadalajara, Mexico / Remote
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="space-y-6">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-4 border-b border-divider group"
                    >
                      <div className="flex items-center gap-3">
                        {link.name === "LinkedIn" ? (
                          <Linkedin size={18} strokeWidth={1.5} className="text-ink" />
                        ) : (
                          <ArrowRight size={18} strokeWidth={1.5} className="text-ink" />
                        )}
                        <div>
                          <p className="text-ink">{link.name}</p>
                          <p className="text-sm text-ink-muted">{link.handle}</p>
                        </div>
                      </div>
                      <ArrowRight 
                        size={16} 
                        strokeWidth={1.5} 
                        className="text-ink-muted group-hover:translate-x-1 transition-transform duration-300" 
                      />
                    </a>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={200}>
                <form onSubmit={handleSubmit} className="space-y-6 p-8 md:p-10 border border-divider bg-cream">
                  <div>
                    <Label htmlFor="name" className="text-ink mb-2 block">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="bg-cream border-divider focus:border-ink"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-ink mb-2 block">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      className="bg-cream border-divider focus:border-ink"
                    />
                  </div>

                  <div>
                    <Label htmlFor="projectType" className="text-ink mb-2 block">Project Type</Label>
                    <Input
                      id="projectType"
                      type="text"
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      placeholder="Brand identity, visual system, art direction..."
                      className="bg-cream border-divider focus:border-ink"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-ink mb-2 block">Message</Label>
                    <Textarea
                      id="message"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about your project, timeline, and goals..."
                      rows={5}
                      required
                      className="bg-cream border-divider focus:border-ink resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                    <ArrowRight size={18} strokeWidth={1.5} />
                  </Button>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <ScrollReveal>
              <div>
                <p className="eyebrow mb-4">Availability</p>
                <p className="text-ink-light">Currently open for freelance and full-time opportunities.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div>
                <p className="eyebrow mb-4">Response Time</p>
                <p className="text-ink-light">Usually within 2 business days.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <p className="eyebrow mb-4">Location</p>
                <p className="text-ink-light">Guadalajara, Mexico / Remote worldwide.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
