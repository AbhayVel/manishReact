class Employee {
	id = 0;
	eid = 4;

}


class Person {
	id = 2;
	pid = 3;
	constructor(employee) {
		this.employee = employee;
	}
}



const useServiceFactory = (function () {
	const objectInstance = {

	}



	const createObject = (ctor, args) => {
		return new (ctor.bind.apply(ctor, [null].concat(args)))();
	};


	const useServices = (props) => {


		const index = Provider.findIndex((e) => {
			return e.provide.name === props.name;
		})

		if (index === -1) {
			throw "No Provider is provided";
		}
		const provider = Provider[index];
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

const Provider = [
	{ provide: Person, dependency: [Employee] },
	{ provide: Employee, dependency: [] }
]

const useService = useServiceFactory(Provider);
var person = useService(Person);

console.log(person);
