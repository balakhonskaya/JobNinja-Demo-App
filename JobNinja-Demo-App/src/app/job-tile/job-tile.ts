export interface Jobs {
    _index: string;
    _id: string;
    _source: {
        id: { type: 'number' },
        title: { type: 'string' },
        short_list_desc: {type: 'number' },
        company: {type: 'string'},
        location_name: {type: 'string'},
        list_image: {type: 'string'}
      },
    }