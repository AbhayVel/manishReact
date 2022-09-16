/*
 * Main logic For Services start
 */
const useServiceFactory = (function (Provider) {
	const objectInstance = {

	}
	const createObject = (ctor, args) => {
		return new (ctor.bind.apply(ctor, [null].concat(args)))();
	};

	const useServices = (arg) => {
		let props = arg;
	    const index = Provider.findIndex((e) => {
			if (typeof props == 'string') {
				return e.name === props;
			}
			return e.provide.name === props.name;
		});

		if (index === -1) {
			throw "No Provider is provided";
		}

		const provider = Provider[index];
		props = provider.provide;
		if (provider.useFactory) {
			objectInstance[props.name] = provider.useFactory();
		} else if (provider.useValue) {
			objectInstance[props.name] = provider.useValue;
		} else if (provider.useClass) {
			objectInstance[props.name] = useServices(provider.useClass) ;
		}
		if (!objectInstance[props.name]) {
			if (provider.dependency.length > 0) {
				const argumentArray = [];
				for (let i = 0; i < provider.dependency.length; i++) {
					argumentArray.push(useServices(provider.dependency[i]));
				}
				objectInstance[props.name] = createObject(props, argumentArray);
			} else {
				objectInstance[props.name] = createObject(props, []);
			}
		}

		return objectInstance[props.name];
	}

	return useServices;
}
);
/*
 * Main logic For Services	End
 */


/* 
 * 	Implementation of services
 */
class Employee {
	id = 0;
	eid = 4;

}

class Employee2 {
	id = 0;
	eid = "emp2";

}
class Person {
	id = 2;
	pid = 3;
	constructor(employee) {
		this.employee = employee;
	}
}

const Provider1 = [
	{ name: 'Person', provide: Person, dependency: [Employee] },
	{
		name: 'Employee', provide: Employee, dependency: [], useClass: Employee2
	},
	{
		name: 'Employee2', provide: Employee2, dependency: []
	},

]

const useService = useServiceFactory(Provider1);
var person = useService(Person);
person.id = "abhay";
var person2 = useService('Person');
console.log(person2);
