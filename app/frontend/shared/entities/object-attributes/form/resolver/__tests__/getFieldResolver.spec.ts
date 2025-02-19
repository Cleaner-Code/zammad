// Copyright (C) 2012-2022 Zammad Foundation, https://zammad-foundation.org/

import getFieldResolver from '../getFieldResolver'

describe('object attribute resolver available', () => {
  it('should return the correct field resolver', () => {
    const fieldResolver = getFieldResolver({
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
