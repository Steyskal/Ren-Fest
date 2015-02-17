describe("SponsorsCtrl Unit test", function () {

    var scope,sponsorsCtrl;
    beforeEach(module('sponsors.controllers'));

    beforeEach(inject(function($rootScope, $controller){
        scope=$rootScope.$new();
        sponsorsCtrl=$controller('SponsorsCtrl', {$scope: scope});
    }));

    it('should have a SponsorsCtrl controller', function() {
        expect(sponsorsCtrl).toBeDefined();
    });

    it("should have a $scope variable", function() {
        expect(scope).toBeDefined();
    });

    it("should have a $scope.sponsors variable", function() {
        expect(scope.sponsors).toBeDefined();
    });

});
