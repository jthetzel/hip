define(['jquery', 'views/forms/base', 'views/forms/sections/branch-list', ], function ($, BaseForm, BranchList) {
    return BaseForm.extend({
        initialize: function() {
            BaseForm.prototype.initialize.apply(this);

            this.addBranchList(new BranchList({
                el: this.$el.find('#xref-section')[0],
                data: this.data,
                dataKey: 'EXTERNAL_RESOURCE.E1',
                validateBranch: function(nodes){
                    return this.validateHasValues(nodes);
                }

            }));
        }
    });
});