"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { CheckCircle, Leaf, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="small"
      sizing="small"
      background="circleGradient"
      cardStyle="solid-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="GroceryShop"
          button={{
            text: "Order Now",
            href: "#contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Fresh Produce Daily"
          description="Your trusted local grocery shop with the freshest vegetables and fruits in Ukraine"
          tag="Local Quality"
          tagIcon={Leaf}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764087735950-spd3o5zy.jpg"
          imageAlt="supermarket, stalls, coolers, market, food, fresh, shop, organic, vegetable, healthy, grocery, store, fruit, ripe, yellow, freshness, marketplace, hypermarket, colorful, stand, consumer, nutrition"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={true}
          buttons={[
            {
              text: "Shop Now",
              href: "#products"
            },
            {
              text: "Learn More",
              href: "#about"
            }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <TextAbout
          title="We bring fresh, quality produce directly to your neighborhood. Supporting local farmers and providing the best prices for families throughout Ukraine."
          buttons={[
            {
              text: "Visit Us",
              href: "#contact"
            }
          ]}
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardFour
          title="Why Choose Us"
          description="Premium quality at local prices"
          features={[
            {
              title: "Fresh Daily",
              description: "Vegetables and fruits delivered fresh every morning from local farms",
              icon: Leaf
            },
            {
              title: "Best Prices",
              description: "Competitive prices supporting both our farmers and your family budget",
              icon: Zap
            },
            {
              title: "Community Focus",
              description: "Supporting local agriculture and strengthening our neighborhood",
              icon: Users
            },
            {
              title: "Quality Guaranteed",
              description: "Hand-selected produce meeting strict quality standards",
              icon: CheckCircle
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>
      
      <div id="products" data-section="products">
        <ProductCardTwo
          title="Our Products"
          description="Fresh selection of local and quality produce"
          products={[
            {
              id: "1",
              brand: "Local Farms",
              name: "Fresh Apples",
              price: "45 UAH/kg",
              rating: 5,
              reviewCount: "284",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764087742374-sapp3qgw.jpg",
              imageAlt: "apple, red, fruit, red chief, red apple, fresh apple, ripe, ripe apple, fresh, fresh fruit, harvest, produce, organic, healthy, food, close up"
            },
            {
              id: "2",
              brand: "Local Farms",
              name: "Ripe Tomatoes",
              price: "35 UAH/kg",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764087743599-lhf7ebvn.jpg",
              imageAlt: "tomatoes, fruit, food, red tomatoes, ripe, organic, fresh, healthy, vitamin, nutrition"
            },
            {
              id: "3",
              brand: "Local Farms",
              name: "Orange Carrots",
              price: "28 UAH/kg",
              rating: 5,
              reviewCount: "203",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764087744800-6q734hgv.jpg",
              imageAlt: "carrots, yellow beets, vegetables, carrot, food, vitamins, meal, fresh, bio, cook, yummy, vegetarian, vegetable plants, market fresh vegetables, orange, healthy, nourishment, vegan, ingredients"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Customers Say"
          description="Real feedback from our community"
          testimonials={[
            {
              id: "1",
              name: "Maria",
              handle: "@maria_kyiv",
              testimonial: "Best quality produce in our neighborhood. The prices are honest and the vegetables stay fresh for days!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764087746084-ira5bg9x.jpg",
              imageAlt: "confident, thumbs, thumbs up, happy, hiring, ecommerce, mental health, subscribe, human resources, job interview, customer support, woman, young, isolated, looking, portrait, person, attractive, adult, face, girl, smile, casual, female, cute, model, cheerful, expression, lifestyle, corporate, company, business, professional, expressive, health, manager, profession, work"
            },
            {
              id: "2",
              name: "Ihor",
              handle: "@ihor_local",
              testimonial: "Finally found a store that supports local farmers. Love the variety and freshness every visit.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764087747247-t4po0gp9.jpg",
              imageAlt: "cat, domestic cat, pet, lucky cat, puss, domestic animal, animal, nature, face, view, watch, attentive, vigilant, head, portrait, eyes, close up, animal portrait, graceful, hidden, beauty, satisfied"
            },
            {
              id: "3",
              name: "Olena",
              handle: "@olena_home",
              testimonial: "The staff is always helpful and the selection of fresh produce is unmatched. Highly recommend!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764087748598-hffdkenj.jpg",
              imageAlt: "girl, african, child, female, person, close up, cute, kid, portrait, young, little girl, african girl, childhood"
            },
            {
              id: "4",
              name: "Petro",
              handle: "@petro_kitchen",
              testimonial: "Quality and affordability combined. This is my go-to store for all my grocery needs.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764087749588-8g76ypwy.jpg",
              imageAlt: "confident, thumbs, thumbs up, happy, hiring, ecommerce, mental health, subscribe, human resources, job interview, customer support, woman, young, isolated, looking, portrait, person, attractive, adult, face, girl, smile, casual, female, cute, model, cheerful, expression, lifestyle, corporate, company, business, professional, expressive, health, manager, profession, work"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Common Questions"
          sideDescription="Find answers to frequently asked questions about our store and products"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What are your store hours?",
              content: "We are open Monday to Sunday, 8:00 AM to 8:00 PM. Sunday hours are 9:00 AM to 7:00 PM."
            },
            {
              id: "2",
              title: "Do you deliver orders?",
              content: "Yes, we offer local delivery for orders over 200 UAH. Delivery is available within 5 km of our store."
            },
            {
              id: "3",
              title: "Where do you source your produce?",
              content: "All our produce comes from local Ukrainian farms within the region. We directly support local farmers."
            },
            {
              id: "4",
              title: "Do you offer bulk discounts?",
              content: "Yes, bulk orders of 5+ kg receive a 10% discount. Please contact us for bulk order details."
            },
            {
              id: "5",
              title: "What payment methods do you accept?",
              content: "We accept cash and card payments. We also offer payment through popular mobile payment apps."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get In Touch"
          description="Have questions? We would love to hear from you. Send us a message or visit our store."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Your Message",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          logoText="GroceryShop"
          copyrightText="© 2025 GroceryShop Ukraine. All rights reserved."
          columns={[
            {
              title: "Store",
              items: [
                {
                  label: "Hours",
                  href: "#"
                },
                {
                  label: "Location",
                  href: "#contact"
                },
                {
                  label: "Delivery",
                  href: "#"
                }
              ]
            },
            {
              title: "Products",
              items: [
                {
                  label: "Vegetables",
                  href: "#products"
                },
                {
                  label: "Fruits",
                  href: "#products"
                },
                {
                  label: "Local Produce",
                  href: "#products"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Contact Us",
                  href: "#contact"
                },
                {
                  label: "FAQ",
                  href: "#faq"
                },
                {
                  label: "About",
                  href: "#about"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}