$scope.$digest = function () {
    var dirty = true;
    var scope = this;

    while (dirty) {
        //reset from last iteration
        dirty = false;

        $scope.$$watchers.map(function (watcher) {
            //    execute watch function to get new value
            newValue = watcher.watchFunc(scope);

            //    check if value has changed from last cycle
            if (newValue !== watcher.lastValue) {
                dirty = true;

                //    execute listener and store new list value
                watcher.listenerFunc(newValue, watcher.lastValue, scope);
                watcher.lastValue = newValue;
            }
        })
    }
};