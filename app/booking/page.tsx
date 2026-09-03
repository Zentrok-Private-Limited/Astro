"use client";
import { useState } from "react";
import { BadgeCheck, PhoneCall, ScrollText } from "lucide-react";
import { allPoojas } from "@/data/poojasData";

function Booking() {
  const pujaCategories = [
    {
      title: "Health & Healing",
      image: "/images/health-heal.webp",
    },
    {
      title: "Wealth & Prosperity",
      image: "/images/wealth.png",
    },
    {
      title: "Career & Education",
      image: "/images/career.png",
    },
    {
      title: "Marriage & Relationships",
      image: "/images/love.webp",
    },
    {
      title: "Protection from Negativity",
      image: "/images/protection.jpg",
    },
    {
      title: "Festivals & Occasions",
      image: "/images/festival.webp",
    },
    {
      title: "Peace & Spiritual Growth",
      image: "/images/peace.webp",
    },
    {
      title: "Other",
      image: "/images/ayushhomam.jpg",
    },
  ];

  const [selectedPuja, setSelectedPuja] = useState("");
  const [otherPuja, setOtherPuja] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    language: "",
    preferredDate: "",
    preferredTime: "",
    sankalpName: "",
    gotra: "",
    nakshatra: "",
    preferredPooja: "",
    participants: "",
    specialRequest: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <span className="rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Book Online Pooja
          </span>

          <h1 className="mt-5 font-serif text-4xl text-primary md:text-5xl">
            Reserve Your Sacred Ritual
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
            Share your spiritual requirements and let our experienced Vedic
            priests perform an authentic puja dedicated to your prayers and
            intentions. Complete the booking form below to begin your spiritual
            journey.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Step 1
            </span>

            <h2 className="mt-2 font-serif text-3xl text-primary">
              Choose Your Pooja Category
            </h2>

            <p className="mt-3 max-w-3xl text-muted-foreground">
              Select the category that best matches your spiritual requirement.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pujaCategories.map((item) => {
              const active = selectedPuja === item.title;

              return (
                <button
                  key={item.title}
                  onClick={() => setSelectedPuja(item.title)}
                  className={`group overflow-hidden rounded-3xl border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                    active
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-border"
                  }`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="font-serif text-lg text-primary">
                      {item.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {selectedPuja === "Other" && (
            <div className="mt-8">
              <label className="mb-2 block font-medium text-primary">
                Tell us which Pooja you would like to book
              </label>

              <textarea
                rows={4}
                value={otherPuja}
                onChange={(e) => setOtherPuja(e.target.value)}
                className="w-full rounded-2xl border border-border bg-background p-4 outline-none transition focus:border-primary"
                placeholder="Describe your desired pooja..."
              />
            </div>
          )}
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Step 2
            </span>

            <h2 className="mt-2 font-serif text-3xl text-primary">
              Devotee Information
            </h2>

            <p className="mt-3 max-w-3xl text-muted-foreground">
              Please provide your details so our priests can perform a
              personalized sankalp during the ritual.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-medium text-primary">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-primary">
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-primary">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 234 567 890"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-primary">
                  Country *
                </label>

                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-primary">
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-primary">
                  Preferred Language
                </label>

                <select
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary"
                >
                  <option value="">Select Language</option>
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Kannada</option>
                  <option>Tamil</option>
                  <option>Telugu</option>
                  <option>Malayalam</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Step 3
            </span>

            <h2 className="mt-2 font-serif text-3xl text-primary">
              Pooja Details
            </h2>

            <p className="mt-3 max-w-3xl text-muted-foreground">
              Provide the ritual details so our priests can prepare your
              personalized sankalp and perform the pooja according to Vedic
              traditions.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Date */}

              <div>
                <label className="mb-2 block font-medium text-primary">
                  Preferred Date *
                </label>

                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3"
                />
              </div>

              {/* Time */}

              <div>
                <label className="mb-2 block font-medium text-primary">
                  Preferred Time
                </label>

                <input
                  type="time"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3"
                />
              </div>

              {/* Sankalp */}

              <div>
                <label className="mb-2 block font-medium text-primary">
                  Name for Sankalp *
                </label>

                <input
                  type="text"
                  name="sankalpName"
                  value={formData.sankalpName}
                  onChange={handleChange}
                  placeholder="Name to be used during the ritual"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3"
                />
              </div>

              {/* Gotra */}

              <div>
                <label className="mb-2 block font-medium text-primary">
                  Gotra
                </label>

                <input
                  type="text"
                  name="gotra"
                  value={formData.gotra}
                  onChange={handleChange}
                  placeholder="Enter Gotra (if known)"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3"
                />
              </div>

              {/* Nakshatra */}

              <div>
                <label className="mb-2 block font-medium text-primary">
                  Nakshatra
                </label>

                <input
                  type="text"
                  name="nakshatra"
                  value={formData.nakshatra}
                  onChange={handleChange}
                  placeholder="Birth Star"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3"
                />
              </div>

              {/* Participants */}

              <div>
                <label className="mb-2 block font-medium text-primary">
                  Number of Participants
                </label>

                <input
                  type="number"
                  min="1"
                  name="participants"
                  value={formData.participants}
                  onChange={handleChange}
                  placeholder="1"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3"
                />
              </div>

              {/* Purpose */}

              <div className="md:col-span-2">
                <label className="mb-2 block font-medium text-primary">
                  Select your Preferred Pooja *
                </label>

                <select
                  name="preferredPooja"
                  value={formData.preferredPooja}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3"
                >
                  <option value="">Select Pooja</option>

                  {allPoojas.map((pooja) => (
                    <option key={pooja.title} value={pooja.title}>
                      {pooja.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Prayer */}

              <div className="md:col-span-2">
                <label className="mb-2 block font-medium text-primary">
                  Prayer Intention / Special Request
                </label>

                <textarea
                  rows={5}
                  name="specialRequest"
                  value={formData.specialRequest}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      specialRequest: e.target.value,
                    })
                  }
                  placeholder="Please share any special prayer intentions or additional information for the priest..."
                  className="w-full rounded-2xl border border-border bg-background p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Step 4
            </span>

            <h2 className="mt-2 font-serif text-3xl text-primary">
              Review & Confirm Your Booking
            </h2>

            <p className="mt-3 text-muted-foreground">
              Please review your booking details before proceeding with the
              confirmation deposit.
            </p>
          </div>

          {/* Grid Starts */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Card */}
            <div className="lg:col-span-2 rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h3 className="font-serif text-2xl text-primary">
                Booking Summary
              </h3>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <SummaryItem
                  label="Pooja Category"
                  value={selectedPuja || "Not Selected"}
                />

                <SummaryItem
                  label="Preferred Date"
                  value={formData.preferredDate || "--"}
                />

                <SummaryItem
                  label="Preferred Time"
                  value={formData.preferredTime || "--"}
                />

                <SummaryItem
                  label="Sankalp Name"
                  value={formData.sankalpName || "--"}
                />

                <SummaryItem label="Gotra" value={formData.gotra || "--"} />

                <SummaryItem
                  label="Nakshatra"
                  value={formData.nakshatra || "--"}
                />

                <SummaryItem
                  label="Participants"
                  value={formData.participants || "1"}
                />

                <SummaryItem label="Purpose" value={formData.purpose || "--"} />
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="rounded-3xl border border-primary/20 bg-primary p-8 text-primary-foreground shadow-xl">
                <h3 className="font-serif text-3xl">Confirm Your Booking</h3>

                <p className="mt-4 leading-7 text-primary-foreground/90">
                  To reserve your preferred date and begin the arrangements for
                  your personalized pooja, a confirmation deposit is required.
                </p>

                <div className="my-8 rounded-2xl bg-white/10 p-6">
                  <p className="text-sm opacity-80">Confirmation Deposit</p>

                  <h2 className="mt-2 text-5xl font-bold">$50</h2>

                  <p className="mt-2 text-sm opacity-80">Payable now</p>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    ✓ Dedicated Priest Allocation
                  </div>

                  <div className="flex items-center gap-3">
                    ✓ Personalized Sankalp
                  </div>

                  <div className="flex items-center gap-3">
                    ✓ Priority Scheduling
                  </div>

                  <div className="flex items-center gap-3">
                    ✓ Booking Confirmation
                  </div>
                </div>

                <button className="mt-8 w-full rounded-full bg-white py-4 font-semibold text-primary transition hover:scale-[1.02]">
                  Confirm Booking & Pay $50
                </button>

                <p className="mt-4 text-center text-xs text-primary-foreground/70">
                  Secure online payment • Confirmation email sent instantly
                </p>
              </div>
            </div>
          </div>
          {/* Grid Ends */}
        </div>
      </section>

      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Need Guidance?
            </span>

            <h2 className="mt-3 font-serif text-4xl text-primary">
              Request a Free Consultation
            </h2>

            <p className="mx-auto mt-4 max-w-3xl leading-8 text-muted-foreground">
              Unsure which pooja is right for you? Our spiritual advisors will
              understand your concerns and recommend the most suitable Vedic
              ritual based on your requirements.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left Side */}

            <div className="rounded-3xl border border-border bg-card p-10 shadow-sm">
              <h3 className="font-serif text-2xl text-primary">
                Why Book a Consultation?
              </h3>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <BadgeCheck className="mt-1 h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-semibold text-primary">
                      Personalized Guidance
                    </h4>

                    <p className="mt-1 text-muted-foreground">
                      Receive recommendations based on your spiritual needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <PhoneCall className="mt-1 h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-semibold text-primary">
                      Convenient Callback
                    </h4>

                    <p className="mt-1 text-muted-foreground">
                      Our team will contact you at your preferred time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <ScrollText className="mt-1 h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-semibold text-primary">
                      Authentic Advice
                    </h4>

                    <p className="mt-1 text-muted-foreground">
                      Guidance from experienced Vedic priests and spiritual
                      experts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}

            <div className="rounded-3xl border border-border bg-card p-10 shadow-sm">
              <h3 className="font-serif text-2xl text-primary">
                Consultation Request
              </h3>

              <div className="mt-8 grid gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="rounded-xl border border-border bg-background px-4 py-3"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-xl border border-border bg-background px-4 py-3"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="rounded-xl border border-border bg-background px-4 py-3"
                />

                <input
                  type="datetime-local"
                  className="rounded-xl border border-border bg-background px-4 py-3"
                />

                <textarea
                  rows={4}
                  placeholder="Briefly describe your concern..."
                  className="rounded-2xl border border-border bg-background p-4"
                />

                <button className="rounded-full bg-primary py-4 font-semibold text-primary-foreground transition hover:opacity-90">
                  Request Callback
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  function SummaryItem({ label, value }: { label: string; value: string }) {
    return (
      <div className="rounded-2xl border border-border bg-secondary/30 p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </p>

        <p className="mt-2 text-base font-medium text-primary">{value}</p>
      </div>
    );
  }
}

export default Booking;
