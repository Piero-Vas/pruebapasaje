'use client';

import {FaPlus} from 'react-icons/fa';
import {Grid} from 'gridjs-react';
import SearchIcon from '@/assets/svg/search.svg';
import {useRouter} from 'next/navigation';
import TableCustom from '@/components/Table';
import {_} from 'gridjs-react';
import { HiOutlinePencil } from 'react-icons/hi';
import { BiTrash } from 'react-icons/bi';
const BookingManagement: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      {/** Heading */}
      <div className="flex flex-row justify-between">
        <div className="p-4">
          <h2 className="text-xl font-bold text-primary">
            Administración de reservas
          </h2>
        </div>

        <div className="p-4">
          <button
            onClick={() => {
              router.push('/booking-admin/payment');
            }}
            className="btn flex flex-row items-center text-white font-bold text-sm bg-primary hover:bg-secondary rounded-full px-4 py-2">
            <FaPlus className="mr-2" />
            <span>Nuevo reserva</span>
          </button>
        </div>
      </div>

      {/** Select and search input */}
      <div className="flex flex-row justify-between items-center mt-8">
        <div className="p-4">
          <div className="flex items-center">
            Mostrar
            <select className="select max-w-xs mx-4">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            entradas
          </div>
        </div>
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar"
              className="input bg-bgSearchInput ml-4 pr-10"
            />
            <div className="absolute top-0 right-0">
              <span className="inline-flex items-center justify-center h-12 px-4">
                <SearchIcon />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/** Table */}
      <div className="w-full overflow-auto">
      <TableCustom
          columns={['NOMBRE', 'MODELO', 'PLACA', 'ASIENTOS', 'ACCIONES']}
          method={'GET'}
          data={(data: {
            data: {
              buses: {
                id_bus: any;
                name: any;
                model: String;
                license_plate: String;
              }[];
              total: any;
            };
          }) =>
            data.data.buses.map(
              (bus: {
                id_bus: any;
                name: any;
                model: String;
                license_plate: String;
              }) => [
                bus.name,
                bus.model,
                bus.license_plate,
                // _(<input type="checkbox" className="toggle toggle-success" />),
                // _(<input type="checkbox" className="toggle toggle-success" />),
                '-',
                _(
                  <div className="flex justify-center">
                    <button
                      className={
                        'h-10 w-10 border rounded-xl text-white text-xl flex items-center justify-center bg-primary'
                      }
                      onClick={() => {}}>
                      <HiOutlinePencil />
                    </button>
                    <button
                      className={
                        'h-10 w-10 border rounded-xl text-white text-xl flex items-center justify-center bg-bgred'
                      }
                      onClick={async () => {
                        // await deleteCity(city.id_city);
                      }}>
                      <BiTrash />
                    </button>
                  </div>,
                ),
              ],
            )
          }
          link={`http://3.14.43.44:4567/tickets/pdf/list`}
        />
      </div>

      <div className="flex mt-8 justify-between flex-row">
        <div></div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Celdas adicionales</span>
            <input type="checkbox" className="toggle ml-4" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default BookingManagement;
