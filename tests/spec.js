describe('Test Password Filter', function() {
    
    beforeEach(module('myApp'));

    describe('filterPassword', function(){
        var $filter;
        beforeEach(inject(function(_$filter_) {
            $filter = _$filter_;
        }));

        it('Check Password Strength LUSN', function() {
            expect($filter('filterPassword')('Testing@#2304')).toEqual(67);
        });
        it('Check Password Strength LUS', function() {
            expect($filter('filterPassword')('Testing@#')).toEqual(48);
        });
        it('Check Password Strength LU', function() {
            expect($filter('filterPassword')('Testingt')).toEqual(36);
        });
        it('Check Password Strength L', function() {
            expect($filter('filterPassword')('testingt')).toEqual(20);
        });
        it('Check Password Strength (less than 8 chars)', function() {
            expect($filter('filterPassword')('test')).toEqual(10);
        });
    });
});