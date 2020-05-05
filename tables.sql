CREATE TABLE IF NOT EXISTS surgeries (
	id SERIAL PRIMARY KEY,
	type TEXT,
	price INTEGER
);

CREATE TABLE IF NOT EXISTS doctors (
	id SERIAL PRIMARY KEY,
	name TEXT
);

CREATE TABLE IF NOT EXISTS patients (
	id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT,
	phone VARCHAR(8),
	email TEXT
);

CREATE TABLE IF NOT EXISTS appointments (
	id SERIAL PRIMARY KEY,
	surgery_id INTEGER,
	doctor_id INTEGER,
	patient_id INTEGER,
	appt_date TEXT,
	appt_time TEXT
);

CREATE TABLE IF NOT EXISTS dates (
	id SERIAL PRIMARY KEY,
	appt_date DATE,
	appt_time TEXT,
	is_booked BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS messages (
	id SERIAL PRIMARY KEY,
	name TEXT,
	phone VARCHAR(8),
	email TEXT,
	message TEXT
);