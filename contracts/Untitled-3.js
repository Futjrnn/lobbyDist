Issue.deployed().then((instance) => { return instance.getTotalContributions() })
Issue.deployed().then((instance) => { return instance.contribute({ value: 500 }) })
Issue.deployed().then((instance) => { return instance.getContribution() })



.then((instance) => {
    instance.contribute({value: 50});
    return instance;
}).then((instance) => {
    console.log(instance.getTotalContributions());    
});