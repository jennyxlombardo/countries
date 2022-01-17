import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { createActivity } from '../../redux/actions/index'
import configureStore from 'redux-mock-store'

import CreateActivity from './activity'

configure({ adapter: new Adapter() })

describe('<CreateActivity />', () => {
  describe('Estructura', () => {
    let wrapper
    beforeEach(() => {
      wrapper = shallow(<CreateActivity />)
    })
    it('Renderiza un <form>', () => {
      expect(wrapper.find('form')).toHaveLength(1)
    })

    it('Renderiza un label con el texto igual a "Name"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(
        wrapper
          .find('label')
          .at(0)
          .text()
      ).toEqual('Name')
    })

    it('Renderiza un input con la propiedad "name" igual a "name"', () => {
      expect(wrapper.find('input[name="name"]')).toHaveLength(1)
    })

    it('Renderiza un label con el texto igual a "Difficulty"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(
        wrapper
          .find('label')
          .at(1)
          .text()
      ).toEqual('Difficulty')
    })

    // it('Renderiza una textarea con la propiedad "name" igual a "description"', () => {
    //   expect(wrapper.find('textarea[name="description"]')).toHaveLength(1);
    // });

    it('Renderiza un label con el texto igual a "Season"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(
        wrapper
          .find('label')
          .at(2)
          .text()
      ).toEqual('Season')
    })

    it('Renderiza un input con la propiedad "name" igual a "season"', () => {
      expect(wrapper.find('input[name="Season"]')).toHaveLength(1)
    })

    it('Renderiza un label con el texto igual a "Duration"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(
        wrapper
          .find('label')
          .at(3)
          .text()
      ).toEqual('Duration')
    })

    it('Renderiza un input con la propiedad "name" igual a "Duration"', () => {
      expect(wrapper.find('input[name="Duration"]')).toHaveLength(1)
    })

    it('Renderiza un boton con el "type" "submit"', () => {
      expect(wrapper.find('button[type="submit"]')).toHaveLength(1)
    })
  })
})
//   describe('Manejo de inputs con estado', () => {
//     let wrapper, useState, useStateSpy
//     beforeEach(() => {
//       useState = jest.fn()
//       useStateSpy = jest.spyOn(React, 'useState')
//       useStateSpy.mockImplementation(init => [init, useState])
//       wrapper = shallow(<CreateActivity />)
//     })

//     describe('Name input', () => {
//       it('El form deberia cambiar de estado cuando escriban en el input de title', () => {
//         // deberías tener un único estado, no uno por cada input
//         wrapper.find('input[name="name"]').simulate('change', {
//           target: { name: 'name', value: 'Soccer' }
//         })
//         expect(useState).toHaveBeenCalledWith({
//           name: 'Soccer',
//           difficulty: '',
//           duration: '',
//           season: ''
//         })
//       })
//     })

//     describe('Difficulty input', () => {
//       it('deberia cambiar de estado cuando escriban en el input de "difficulty"', () => {
//         // debe respetar el estado que ya tenía antes
//         wrapper.find('textarea[name="difficulty"]').simulate('change', {
//           target: { name: 'difficulty', value: '4' }
//         })
//         expect(useState).toHaveBeenCalledWith({
//           name: '',
//           difficulty: '4',
//           duration: '',
//           season: ''
//         })
//       })
//     })

//     describe('Duration input', () => {
//       it('deberia cambiar de estado cuando escriban en el input de "duration"', () => {
//         wrapper
//           .find('input[name="duration"]')
//           .simulate('change', { target: { name: 'duration', value: '5' } })
//         expect(useState).toHaveBeenCalledWith({
//           name: '',
//           difficulty: '',
//           duration: '5',
//           season: ''
//         })
//       })
//     })

//     describe('Season input', () => {
//       it('deberia cambiar de estado cuando escriban en el input de "season"', () => {
//         wrapper
//           .find('input[name="season"]')
//           .simulate('change', { target: { name: 'season', value: 'Fall' } })
//         expect(useState).toHaveBeenCalledWith({
//           name: '',
//           difficulty: '',
//           duration: '',
//           season: 'Fall'
//         })
//       })
//     })
//   })

//   describe('Dispatch to store', () => {
//     var wrapper
//     var store
//     beforeEach(() => {
//       const mockStore = configureStore()
//       store = mockStore([], createActivity)
//       store.clearActions()
//       wrapper = mount(<AddTodoDefault store={store} />)
//     })

//     it('deberia hacer un dispatch al store de la action "CreateActivity" con los datos del state cuando se hace un Submit', () => {
//       wrapper = mount(<AddTodoDefault store={store} />)
//       wrapper
//         .find('[type="submit"]')
//         .simulate('submit', { preventDefault () {} })
//       const expectedAction = [
//         {
//           payload: {
//             name: '',
//             difficulty: '',
//             duration: '',
//             season: '',
//             status: 'Activity',
//             id: 1
//           },
//           type: 'CreateActivity'
//         }
//       ]
//       expect(store.getActions()).toEqual(expectedAction)
//     })

//     it('deberia llamar al evento `preventDefault()` para evitar que se refresque la pagina al hacer un submit', () => {
//       wrapper = mount(<AddTodoDefault store={store} />)
//       const event = { preventDefault: () => {} }
//       jest.spyOn(event, 'preventDefault')
//       wrapper.find('form').simulate('submit', event)
//       expect(event.preventDefault).toBeCalled()
//     })
//   })

