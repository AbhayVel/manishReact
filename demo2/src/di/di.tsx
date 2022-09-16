/*
 * Main logic For Services start
 */
export const useServiceFactory = (function (Provider: any) {
	const objectInstance: any = {

	};
	const createObject = (ctor: any, args: any) => {
		return new (ctor.bind.apply(ctor, [null].concat(args)))();
	};

	const useServices = (arg: any) => {
		let props = arg;
		const index = Provider.findIndex((e: any) => {
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
			objectInstance[props.name] = useServices(provider.useClass);
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