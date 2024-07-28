import { LightningElement } from 'lwc';

export default class LgtTree extends LightningElement {
    items = [
        {
            label: 'Western Sales Director',
            name: '1',
            expanded: true,
            items: [
                {
                    label: 'Western Sales Manager',
                    name: '2',
                    expanded: true,
                    items: [
                        {
                            label: 'CA Sales Rep',
                            name: '3',
                            expanded: true,
                            items: [],
                        },
                        {
                            label: 'OR Sales Rep',
                            name: '4',
                            expanded: true,
                            items: [
                                {
                                    label: 'OR Sales Rep LL',
                                    name: '16',
                                    expanded: true,
                                    items: [
                                        {
                                            label: 'OR Sales Rep LLL',
                                            name: '17',
                                            expanded: true,
                                            items: [
                                                {
                                                    label: 'OR Sales Rep LLLL',
                                                    name: '18',
                                                    expanded: true,
                                                    items: [
                                                        {
                                                    label: 'OR Sales Rep LLLLL',
                                                    name: '18',
                                                    expanded: true,
                                                    items: []
                                                }
                                                    ]
                                                }
                                            ]
                                        }
                                    ],
                                }
                            ],
                        },
                    ],
                },
            ],
        }
    ];
}