import { startOfHour } from 'date-fns';

import Appoitment from '../models/Appointments';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

class CreateAppoitmentService {
  private appointmentsRepository: AppointmentsRepository;

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ provider, date }: Omit<Appoitment, 'id'>): Appoitment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppoitmentService;
