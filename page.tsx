"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturedCollections from "@/components/featured-collections"
import BestSellers from "@/components/best-sellers"
import NewArrivals from "@/components/new-arrivals"
import TrendingNow from "@/components/trending-now"
import CustomerSupportCenter from "@/components/customer-support-center"
import ShopWithConfidence from "@/components/shop-with-confidence"
import SocialMediaSection from "@/components/social-media-section"
import Testimonials from "@/components/testimonials"
import TrustBadges from "@/components/trust-badges"
import NewsletterBox from "@/components/newsletter-box"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedCollections />
        <BestSellers />
        <NewArrivals />
        <TrendingNow />
        <CustomerSupportCenter />
        <ShopWithConfidence />
        <Testimonials />
        <SocialMediaSection />
        <TrustBadges />
        <NewsletterBox />
      </main>
      <Footer />
    </div>
  )
}
