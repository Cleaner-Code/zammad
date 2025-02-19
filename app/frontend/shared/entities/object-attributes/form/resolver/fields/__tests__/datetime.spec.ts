// Copyright (C) 2012-2022 Zammad Foundation, https://zammad-foundation.org/

import { FieldResolverDateTime } from '../datetime'

describe('FieldResolverDateTime', () => {
  it('should return the correct field attributes', () => {
    const fieldResolver = new FieldResolverDateTime({
      dataType: 'datetime',
      name: 'datetime',
      display: 'DateTime',
      dataOption: {
        // TODO ...
      },
    })

    expect(fieldResolver.fieldAttributes()).toEqual({
      label: 'DateTime',
      name: 'datetime',
      props: {},
      type: 'datetime',
    })
  })
})
