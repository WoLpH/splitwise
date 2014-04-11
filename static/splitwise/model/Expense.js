function userSortType(user){
    if(user)
        return [
            user.first_name.toLowerCase(),
            user.last_name.toLowerCase(),
        ];
    else
        return [
            '',
            '',
        ];
}

Ext.define('Splitwise.model.Expense', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'category'},
        {name: 'comments_count', type: 'int'},
        {name: 'cost', type: 'float'},
        {name: 'creation_method'},
        {name: 'currency_code'},
        {name: 'date', type: 'date', dateFormat: Ext.Date.Timestamp},
        {name: 'created_at', type: 'date', dateFormat: Ext.Date.Timestamp},
        {name: 'updated_at', type: 'date', dateFormat: Ext.Date.Timestamp},
        {name: 'deleted_at', type: 'date', dateFormat: Ext.Date.Timestamp},
        {name: 'created_by', sortType: userSortType},
        {name: 'updated_by', sortType: userSortType},
        {name: 'deleted_by', sortType: userSortType},
        {name: 'users'},
        {name: 'description'},
        {name: 'details'},
        {name: 'email_reminder'},
        {name: 'email_reminder_in_advance'},
        {name: 'expense_bundle_id'},
        {name: 'friendship_id'},
        {name: 'group_id'},
        {name: 'next_repeat'},
        {name: 'payment'},
        {name: 'receipt'},
        {name: 'repayments'},
        {name: 'repeat_interval'},
        {name: 'repeats'},
        {name: 'transaction_confirmed'},
        {name: 'transaction_method'},
    ],
    proxy: {
        type: 'rest',
        url: '/expenses/',
        startParam: 'offset',
        reader: {
            root: 'expenses',
        },
    },
    associations: [{
        name: 'group',
        instanceName: 'group',
        associationKey: 'group',
        type: 'belongsTo',
        model: 'Splitwise.model.Group',
        getterName: 'getGroup',
        setterName: 'setGroup',
        foreignKey: 'group_id',
        autoLoad: true,
        autoLoad: true,
    }, {
        name: 'group',
        instanceName: 'group',
        associationKey: 'group',
        type: 'hasOne',
        model: 'Splitwise.model.Group',
        getterName: 'getGroup',
        setterName: 'setGroup',
        foreignKey: 'group_id',
        autoLoad: true,
        autoLoad: true,
    }, {
        name: 'created_by',
        type: 'hasOne',
        model: 'Splitwise.model.User',
        autoLoad: true,
        foreignKey: 'created_by.id',
        associationKey: 'created_by',
        getterName: 'getCreatedBy',
        setterName: 'setCreatedBy',
    }, {
        name: 'updated_by',
        type: 'hasOne',
        model: 'Splitwise.model.User',
        autoLoad: true,
        foreignKey: 'updated_by.id',
        associationKey: 'updated_by',
        getterName: 'getUpdatedBy',
        setterName: 'setUpdatedBy',
    }, {
        name: 'deleted_by',
        type: 'hasOne',
        model: 'Splitwise.model.User',
        autoLoad: true,
        foreignKey: 'deleted_by.id',
        associationKey: 'deleted_by',
        getterName: 'getDeletedBy',
        setterName: 'setDeletedBy',
    }, {
        name: 'users',
        type: 'hasMany',
        model: 'Splitwise.model.User',
        autoLoad: true,
        foreignKey: 'id',
        associationKey: 'users.user',
    }],
});

