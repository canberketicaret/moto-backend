import type { Schema, Struct } from '@strapi/strapi';

export interface NameOptions extends Struct.ComponentSchema {
  collectionName: 'components_name_options';
  info: {
    displayName: 'options';
  };
  attributes: {
    name: Schema.Attribute.String;
    values: Schema.Attribute.JSON;
  };
}

export interface SkuVariants extends Struct.ComponentSchema {
  collectionName: 'components_sku_variants';
  info: {
    displayName: 'variants';
  };
  attributes: {
    optionValues: Schema.Attribute.JSON;
    price: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    sku: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    stock: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'name.options': NameOptions;
      'sku.variants': SkuVariants;
    }
  }
}
