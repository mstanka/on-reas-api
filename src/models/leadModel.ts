import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';

const leadSchema = new mongoose.Schema({
	estateType: {
		type: String,
		required: [true, 'A lead must have an estate type.'],
		trim: true,
	},
	fullName: {
		type: String,
		requiredL: [true, 'A lead must have a name.'],
		trim: true,
	},
	// @ts-ignore
	phone: {
		type: String,
		required: [true, 'A lead must have a phone.'],
		trim: true,
		validate: [isMobilePhone],
	},
	// @ts-ignore
	email: {
		type: String,
		required: [true, 'A lead must have an email'],
		trim: true,
		validate: [isEmail],
	},
	region: {
		type: String,
		required: [true, 'A lead must have a region.'],
		enum: {
			values: [
				'Hlavní město Praha',
				'Středočeský kraj',
				'Jihočeský kraj',
				'Plzeňský kraj',
				'Karlovarský kraj',
				'Ústecký kraj',
				'Liberecký kraj',
				'Královéhradecký kraj',
				'Pardubický kraj',
				'Kraj Vysočina',
				'Jihomoravský kraj',
				'Zlínský kraj',
				'Olomoucký kraj',
				'Moravskoslezský kraj',
			],
			message: [
				`Region must be 'Hlavní město Praha', 'Středočeský kraj', 'Jihočeský kraj', 'Plzeňský kraj', 'Karlovarský kraj','Ústecký kraj', 'Liberecký kraj', 'Královéhradecký kraj', 'Pardubický kraj', 'Kraj Vysočina', 'Jihomoravský kraj','Zlínský kraj', 'Olomoucký kraj' or 'Moravskoslezský kraj'`,
			],
		},
	},
	district: {
		type: String,
		required: [true, 'A lead must have a district'],
		trim: true,
	},
});

export default mongoose.model('Lead', leadSchema);
