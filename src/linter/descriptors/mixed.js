import {error} from '../util';

export default function(item) {
	let descriptors = item.srcset.map(({descriptor}) => (descriptor || '1x'));
	if (
		descriptors.length > 1
		&& descriptors.map(
			desc => desc.substr(-1)
		).reduce(
			(a, b) => a === b ? a : false
		) === false
	) {
		error(__filename, item, descriptors);
	}
}