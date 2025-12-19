export const qrySiteSettings = groq`
*[_type == 'settings'][0]{
  siteOwner,
  title,
  description,
  'theme':clrPrimary.hex,
  'logoUrl':logo.asset->url,
  image{
    caption,
    altText,
    hotspot,
    asset->{
      _id,
      url,
      metadata{
        lqip
      },
    }
  },
  fontPrimary,
  fontSecondary,
  'color':{
    'surface':{
      'dark':{
        'hex': clrDark.hex,
        'rgb': clrDark.rgb,
      },
      'light':{
        'hex': clrLight.hex,
        'rgb': clrLight.rgb
      }
    },
    'primary':{
      'hex': clrPrimary.hex,
      'rgb': clrPrimary.rgb
    },
    'secondary':{
      'hex': clrSecondary.hex,
      'rgb': clrSecondary.rgb
    }
  },
  seo{
    title,
    image{
      caption,
      altText,
      hotspot,
      asset->{
        _id,
        url,
        metadata{
          lqip
        },
      }
    },
  },
  'email':primaryLocation->email,
  'address':primaryLocation->address,
  'addressExt':primaryLocation->addressExt,
  'city':primaryLocation->city,
  'postcode':primaryLocation->postcode,
  'country':primaryLocation->country,
  primaryLocation->{
    'lat':mapLocation.lat,
    'lng':mapLocation.lng,
    phoneNumbers[]{
      number,
      label,
    },
    socialConnections[]{
      _key,
      _type,
      title,
      'userUrl':url+username
    }
  }
}
`;

export const qryPage = groq`
  *[_type == 'page' && slug.current==$slug && isActive][0]{
    _id,
    title,
    'slug':slug.current,
    isActive,
    body,
    sections[]->,
    seo{
      title,
      description,
      image{
        caption,
        alt,
        hotspot,
        asset->{
          _id,
          url,
          metadata{
            lqip
          },
        }
      }
    }
  }
`;

export const qryContactPage = groq`
  *[_type == 'contactpage'][0]{
    _id,
    title,
    content,
    'slug':slug.current,
      image{
        caption,
        alt,
        hotspot,
        asset->{
          _id,
          url,
          metadata{
            lqip
          },
        }
      },
    sections[]->{...}
  }
`;
