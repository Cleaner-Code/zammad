// Copyright (C) 2012-2022 Zammad Foundation, https://zammad-foundation.org/

import { FieldResolverInput } from '../input'

describe('FieldResovlerInput', () => {
  it('should return the correct field attributes', () => {
    const fieldResolver = new FieldResolverInput({
      dataType: 'input',
      name: 'title',
      display: 'Title',
      dataOption: {
        type: 'text',
        maxlength: 100,
      },
    })

    expect(fieldResolver.fieldAttributes()).toEqual({
      label: 'Title',
      name: 'title',
      props: {
        maxlength: 100,
      },
      type: 'text',
    })
  })
})
