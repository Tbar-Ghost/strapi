import type { Schema, Struct } from '@strapi/strapi';

export interface HeroSectionCarousel extends Struct.ComponentSchema {
  collectionName: 'components_hero_section_carousels';
  info: {
    description: '';
    displayName: 'Carousel';
  };
  attributes: {
    cardItem: Schema.Attribute.Component<'hero-section.carousel-item', true>;
    sectionName: Schema.Attribute.Enumeration<['HeroSection']> &
      Schema.Attribute.DefaultTo<'HeroSection'>;
    styleCarousel: Schema.Attribute.JSON;
    styleItems: Schema.Attribute.JSON;
    styleSection: Schema.Attribute.JSON;
  };
}

export interface HeroSectionCarouselItem extends Struct.ComponentSchema {
  collectionName: 'components_hero_section_carousel_items';
  info: {
    description: '';
    displayName: 'CarouselItem';
  };
  attributes: {
    buttontext: Schema.Attribute.String;
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface IconseoSectionIconseo extends Struct.ComponentSchema {
  collectionName: 'components_iconseo_section_iconseos';
  info: {
    description: '';
    displayName: 'Iconseo';
  };
  attributes: {
    cardItemIconseo: Schema.Attribute.Component<
      'iconseo-section.iconseo-item',
      true
    >;
    sectionNameIconseo: Schema.Attribute.Enumeration<['ArrayIconseo']> &
      Schema.Attribute.DefaultTo<'ArrayIconseo'>;
    styleItemsIconseo: Schema.Attribute.JSON;
    styleSectionIconseo: Schema.Attribute.JSON;
  };
}

export interface IconseoSectionIconseoItem extends Struct.ComponentSchema {
  collectionName: 'components_iconseo_section_iconseo_items';
  info: {
    description: '';
    displayName: 'IconseoItem';
  };
  attributes: {
    color: Schema.Attribute.String;
    desc: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface OurblogBlog extends Struct.ComponentSchema {
  collectionName: 'components_ourblog_blogs';
  info: {
    description: '';
    displayName: 'blog';
  };
  attributes: {
    cardItemBlog: Schema.Attribute.Component<'ourblog.blog-item', true>;
    sectionNameBlog: Schema.Attribute.Enumeration<['ArrayBlog']> &
      Schema.Attribute.DefaultTo<'ArrayBlog'>;
    styleItemsblog: Schema.Attribute.JSON;
    styleSectionblog: Schema.Attribute.JSON;
  };
}

export interface OurblogBlogItem extends Struct.ComponentSchema {
  collectionName: 'components_ourblog_blog_items';
  info: {
    displayName: 'BlogItem';
  };
  attributes: {
    date: Schema.Attribute.String;
    description: Schema.Attribute.String;
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface OurfeatureSectionFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_ourfeature_section_feature_items';
  info: {
    displayName: 'FeatureItem';
  };
  attributes: {
    content: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface OurfeatureSectionFeatures extends Struct.ComponentSchema {
  collectionName: 'components_ourfeature_section_features';
  info: {
    description: '';
    displayName: 'features';
  };
  attributes: {
    cardItemFeature: Schema.Attribute.Component<
      'ourfeature-section.feature-item',
      true
    >;
    sectionNameFeatures: Schema.Attribute.Enumeration<['ArrayFeatures']> &
      Schema.Attribute.DefaultTo<'ArrayFeatures'>;
    styleItemsfeatures: Schema.Attribute.JSON;
    styleSectionfeatures: Schema.Attribute.JSON;
  };
}

export interface OurteamSectionMeetourteam extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_section_meetourteams';
  info: {
    description: '';
    displayName: 'Meetourteam';
  };
  attributes: {
    cardItemOurteam: Schema.Attribute.Component<
      'ourteam-section.ourteam-item',
      true
    >;
    sectionNameMeetourteam: Schema.Attribute.Enumeration<['ArrayMeetourteam']> &
      Schema.Attribute.DefaultTo<'ArrayMeetourteam'>;
    styleItemsourteam: Schema.Attribute.JSON;
    styleSectionourteam: Schema.Attribute.JSON;
  };
}

export interface OurteamSectionOurteamItem extends Struct.ComponentSchema {
  collectionName: 'components_ourteam_section_ourteam_items';
  info: {
    displayName: 'OurteamItem';
  };
  attributes: {
    iconone: Schema.Attribute.String;
    iconthree: Schema.Attribute.String;
    icontwo: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    name: Schema.Attribute.String;
    rolejob: Schema.Attribute.String;
  };
}

export interface PricingSectionPricing extends Struct.ComponentSchema {
  collectionName: 'components_pricing_section_pricings';
  info: {
    description: '';
    displayName: 'Pricing';
  };
  attributes: {
    cardItemPricing: Schema.Attribute.Component<
      'pricing-section.pricing-item',
      true
    >;
    sectionNamePricing: Schema.Attribute.Enumeration<['ArrayPricing']> &
      Schema.Attribute.DefaultTo<'ArrayPricing'>;
    styleItemspricing: Schema.Attribute.JSON;
    styleSectionpricing: Schema.Attribute.JSON;
  };
}

export interface PricingSectionPricingItem extends Struct.ComponentSchema {
  collectionName: 'components_pricing_section_pricing_items';
  info: {
    displayName: 'PricingItem';
  };
  attributes: {
    icon: Schema.Attribute.String;
    itemfeature: Schema.Attribute.JSON;
    name: Schema.Attribute.String;
    price: Schema.Attribute.String;
  };
}

export interface ScoreSectionScore extends Struct.ComponentSchema {
  collectionName: 'components_score_section_scores';
  info: {
    description: '';
    displayName: 'Score';
  };
  attributes: {
    cardItemScore: Schema.Attribute.Component<'score-section.score-item', true>;
    sectionNameScore: Schema.Attribute.Enumeration<['ArrayScore']>;
    styleItemscore: Schema.Attribute.JSON;
    styleSectionscore: Schema.Attribute.JSON;
  };
}

export interface ScoreSectionScoreItem extends Struct.ComponentSchema {
  collectionName: 'components_score_section_score_items';
  info: {
    displayName: 'ScoreItem';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    number: Schema.Attribute.String;
  };
}

export interface SeoIconseo extends Struct.ComponentSchema {
  collectionName: 'components_seo_iconseos';
  info: {
    displayName: 'iconseo';
  };
  attributes: {
    bgcolor: Schema.Attribute.String;
    color: Schema.Attribute.String;
    desc: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    textcolor: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SeoMeettourteam extends Struct.ComponentSchema {
  collectionName: 'components_seo_meettourteams';
  info: {
    displayName: 'Meettourteam';
  };
  attributes: {
    hoverimagecolor: Schema.Attribute.String;
    iconone: Schema.Attribute.String;
    iconthree: Schema.Attribute.String;
    icontwo: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    name: Schema.Attribute.String;
    rolejob: Schema.Attribute.String;
    textcolorname: Schema.Attribute.String;
    textcolorrolejob: Schema.Attribute.String;
  };
}

export interface SeoOurblog extends Struct.ComponentSchema {
  collectionName: 'components_seo_ourblogs';
  info: {
    displayName: 'Ourblog';
  };
  attributes: {
    bgcolorblock: Schema.Attribute.String;
    date: Schema.Attribute.String;
    description: Schema.Attribute.String;
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    textcolordate: Schema.Attribute.String;
    textcolordescription: Schema.Attribute.String;
    textcolortitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SeoOurfeature extends Struct.ComponentSchema {
  collectionName: 'components_seo_ourfeatures';
  info: {
    displayName: 'Ourfeature';
  };
  attributes: {
    bgcontentcolor: Schema.Attribute.String;
    bgtitlecolor: Schema.Attribute.String;
    content: Schema.Attribute.String;
    contenttextcolor: Schema.Attribute.String;
    title: Schema.Attribute.String;
    titlecolor: Schema.Attribute.String;
  };
}

export interface SeoPricing extends Struct.ComponentSchema {
  collectionName: 'components_seo_pricings';
  info: {
    displayName: 'pricing';
  };
  attributes: {
    bgcolor: Schema.Attribute.String;
    colorbutton: Schema.Attribute.String;
    features: Schema.Attribute.JSON;
    icon: Schema.Attribute.String;
    price: Schema.Attribute.String;
    textbutton: Schema.Attribute.String;
    textcolorbutton: Schema.Attribute.String;
    textcolorfeatures: Schema.Attribute.String;
    textcolorprice: Schema.Attribute.String;
    textcolortitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SeoScore extends Struct.ComponentSchema {
  collectionName: 'components_seo_scores';
  info: {
    displayName: 'score';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    number: Schema.Attribute.String;
    textcolorlabel: Schema.Attribute.String;
    textcolornumber: Schema.Attribute.String;
  };
}

export interface SeoSlideheader extends Struct.ComponentSchema {
  collectionName: 'components_seo_slideheaders';
  info: {
    displayName: 'slideheader';
  };
  attributes: {
    bgcolor: Schema.Attribute.String;
    buttontext: Schema.Attribute.String;
    headingone: Schema.Attribute.String;
    headingtwo: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    textcolorbutton: Schema.Attribute.String;
    textcolorheadingone: Schema.Attribute.String;
    textcolorheadingtwo: Schema.Attribute.String;
  };
}

export interface SeoTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_seo_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    avatar: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    bgcolor: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    name: Schema.Attribute.String;
    rolejobuser: Schema.Attribute.String;
    text: Schema.Attribute.String;
    textcolor: Schema.Attribute.String;
    textcolorjobuser: Schema.Attribute.String;
    textcolorname: Schema.Attribute.String;
  };
}

export interface TestimonialSectionTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_testimonial_section_testimonials';
  info: {
    description: '';
    displayName: 'Testimonial';
  };
  attributes: {
    cardItemTestmonial: Schema.Attribute.Component<
      'testimonial-section.testimonial-item',
      true
    >;
    sectionNameTestimonial: Schema.Attribute.Enumeration<['ArrayTestimonial']>;
    styleItemstestimonial: Schema.Attribute.JSON;
    styleSectiontestimonial: Schema.Attribute.JSON;
  };
}

export interface TestimonialSectionTestimonialItem
  extends Struct.ComponentSchema {
  collectionName: 'components_testimonial_section_testimonial_items';
  info: {
    displayName: 'TestimonialItem';
  };
  attributes: {
    avatar: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    name: Schema.Attribute.String;
    rolejobuser: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hero-section.carousel': HeroSectionCarousel;
      'hero-section.carousel-item': HeroSectionCarouselItem;
      'iconseo-section.iconseo': IconseoSectionIconseo;
      'iconseo-section.iconseo-item': IconseoSectionIconseoItem;
      'ourblog.blog': OurblogBlog;
      'ourblog.blog-item': OurblogBlogItem;
      'ourfeature-section.feature-item': OurfeatureSectionFeatureItem;
      'ourfeature-section.features': OurfeatureSectionFeatures;
      'ourteam-section.meetourteam': OurteamSectionMeetourteam;
      'ourteam-section.ourteam-item': OurteamSectionOurteamItem;
      'pricing-section.pricing': PricingSectionPricing;
      'pricing-section.pricing-item': PricingSectionPricingItem;
      'score-section.score': ScoreSectionScore;
      'score-section.score-item': ScoreSectionScoreItem;
      'seo.iconseo': SeoIconseo;
      'seo.meettourteam': SeoMeettourteam;
      'seo.ourblog': SeoOurblog;
      'seo.ourfeature': SeoOurfeature;
      'seo.pricing': SeoPricing;
      'seo.score': SeoScore;
      'seo.slideheader': SeoSlideheader;
      'seo.testimonial': SeoTestimonial;
      'testimonial-section.testimonial': TestimonialSectionTestimonial;
      'testimonial-section.testimonial-item': TestimonialSectionTestimonialItem;
    }
  }
}
