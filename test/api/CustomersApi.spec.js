/**
 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 17.8
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
import expect from 'expect.js'
import * as ShopApi from '../../src/index'

import {clientId, proxyUrl, baseUrl} from '../config.json'
import * as utils from '../utils'

var instance
let client
let newCustomer
before(() => {
    client = new ShopApi.ApiClient(
        `${baseUrl}`,
        { 'x-dw-client-id': clientId }
    )
    return utils.getNewRegisteredUser(client)
        .then((customer) => {
            newCustomer = customer
            return Promise.resolve()
        })
})

beforeEach(() => {
    instance = new ShopApi.CustomersApi(client)
})

// afterEach(() => utils.clearUserAuth(client))

var getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
        return object[getter]();
    else
        return object[property];
}

var setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
        object[setter](value);
    else
        object[property] = value;
}

describe('CustomersApi', () => {

    // // NOTE: Deleting the customers session token is a success if no exception is raised.
    // describe('deleteCustomersAuth', () => {
    //     it('should call deleteCustomersAuth successfully', () =>
    //         instance.deleteCustomersAuth()
    //     )
    // })

    // describe('deleteCustomersByIDAddressesByID', () => {
    //     it('should call deleteCustomersByIDAddressesByID successfully', () => {
    //         instance.deleteCustomersByIDAddressesByID(function(error) {
    //          if (error) throw error;
    //         expect().to.be();
    //         })
    //
    //     })
    // })

    // describe('deleteCustomersByIDPaymentInstrumentsByID', () => {
    //     it('should call deleteCustomersByIDPaymentInstrumentsByID successfully', () => {
    //         //uncomment below and update the code to test deleteCustomersByIDPaymentInstrumentsByID
    //         //instance.deleteCustomersByIDPaymentInstrumentsByID(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be();
    //         //})
    //
    //     })
    // })
    //
    // describe('deleteCustomersByIDProductListsByID', () => {
    //     it('should call deleteCustomersByIDProductListsByID successfully', () => {
    //         //uncomment below and update the code to test deleteCustomersByIDProductListsByID
    //         //instance.deleteCustomersByIDProductListsByID(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be();
    //         //})
    //
    //     })
    // })
    //
    // describe('deleteCustomersByIDProductListsByIDItemsByID', () => {
    //     it('should call deleteCustomersByIDProductListsByIDItemsByID successfully', () => {
    //         //uncomment below and update the code to test deleteCustomersByIDProductListsByIDItemsByID
    //         //instance.deleteCustomersByIDProductListsByIDItemsByID(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be();
    //         //})
    //
    //     })
    // })

    describe('getCustomersByID', () => {
        it('should call getCustomersByID successfully', () => {
            return instance.getCustomersByID(newCustomer.customer_id)
                .then((customer) => {
                    expect(customer.customer_id).to.be(newCustomer.customer_id)
                })
        })
    })

    describe('getCustomersByIDAddresses', () => {
        it('should call getCustomersByIDAddresses successfully', () => {
            return instance.getCustomersByIDAddresses(newCustomer.customer_id)
                .then((result) => {
                    expect(result.constructor.name).to.be('CustomerAddressResultModel')
                })
        })
    })

    describe('getCustomersByIDAddressesByID', () => {
        it('should call getCustomersByIDAddressesByID successfully', () => {
            return instance.getCustomersByIDAddressesByID(newCustomer.customer_id, 'work')
                .then((address) => {
                    expect(address.constructor.name).to.be('CustomerAddressModel')
                    expect(address.address_id).to.be('work')
                })
        })
    })

    describe('getCustomersByIDBaskets', () => {
        it('should call getCustomersByIDBaskets successfully', () => {
            return instance.getCustomersByIDBaskets(newCustomer.customer_id)
                .then((result) => {
                    expect(result.constructor.name).to.be('BasketsResultModel')
                })
        })
    })

    describe('getCustomersByIDOrders', () => {
        it('should call getCustomersByIDOrders successfully', () => {
            return instance.getCustomersByIDOrders(newCustomer.customer_id)
                .then((result) => {
                    expect(result.constructor.name).to.be('CustomerOrderResultModel')
                })
        })
    })

    describe('getCustomersByIDPaymentInstruments', () => {
        it('should call getCustomersByIDPaymentInstruments successfully', () => {
            return instance.getCustomersByIDPaymentInstruments(newCustomer.customer_id)
                .then((result) => {
                    expect(result.constructor.name).to.be('CustomerPaymentInstrumentResultModel')
                })
        })
    })

    // describe('getCustomersByIDPaymentInstrumentsByID', () => {
    //     it('should call getCustomersByIDPaymentInstrumentsByID successfully', () => {
    //         //uncomment below and update the code to test getCustomersByIDPaymentInstrumentsByID
    //         //instance.getCustomersByIDPaymentInstrumentsByID(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be();
    //         //})
    //         const customerInfo = utils.getAuthClientInfo(client)
    //
    //         return instance.getCustomersByIDPaymentInstrumentsByID(customerInfo.customer_id, 'mastercard')
    //             .then((result) => {
    //                 expect(result.constructor.name).to.be('CustomerPaymentInstrumentResultModel')
    //             })
    //     })
    // })

    describe('getCustomersByIDProductLists', () => {
        it('should call getCustomersByIDProductLists successfully', () => {
            return instance.getCustomersByIDProductLists(newCustomer.customer_id)
                .then((result) => {
                    expect(result.constructor.name).to.be('CustomerProductListResultModel')
                })
        })
    })

    // describe('getCustomersByIDProductListsByID', () => {
    //     it('should call getCustomersByIDProductListsByID successfully', () => {
    //         //uncomment below and update the code to test getCustomersByIDProductListsByID
    //         //instance.getCustomersByIDProductListsByID(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be();
    //         //})
    //
    //     })
    // })
    //
    // describe('getCustomersByIDProductListsByIDItems', () => {
    //     it('should call getCustomersByIDProductListsByIDItems successfully', () => {
    //         //uncomment below and update the code to test getCustomersByIDProductListsByIDItems
    //         //instance.getCustomersByIDProductListsByIDItems(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be();
    //         //})
    //
    //     })
    // })
    //
    // describe('getCustomersByIDProductListsByIDItemsByID', () => {
    //     it('should call getCustomersByIDProductListsByIDItemsByID successfully', () => {
    //         //uncomment below and update the code to test getCustomersByIDProductListsByIDItemsByID
    //         //instance.getCustomersByIDProductListsByIDItemsByID(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be();
    //         //})
    //
    //     })
    // })

    describe('patchCustomersByID', () => {
        it('should call patchCustomersByID successfully', () => {
            return instance.patchCustomersByID(newCustomer.customer_id, { last_name: 'user-edited' })
                .then((customer) => {
                    expect(customer.constructor.name).to.be('CustomerModel')
                    expect(customer.last_name).to.be('user-edited')
                })
        })
    })

    describe('patchCustomersByIDAddressesByID', () => {
        it('should call patchCustomersByIDAddressesByID successfully', () => {
            //uncomment below and update the code to test patchCustomersByIDAddressesByID
            //instance.patchCustomersByIDAddressesByID(function(error) {
            //  if (error) throw error;
            //expect().to.be();
            //})
            return instance.patchCustomersByIDAddressesByID(newCustomer.customer_id, 'work', { city: 'Vancouver-edited' })
                .then((customerAddress) => {
                    expect(customerAddress.constructor.name).to.be('CustomerAddressModel')
                    expect(customerAddress.city).to.be('Vancouver-edited')
                })
        })
    })
    //
    // describe('patchCustomersByIDProductListsByID', () => {
    //     it('should call patchCustomersByIDProductListsByID successfully', () => {
    //         //uncomment below and update the code to test patchCustomersByIDProductListsByID
    //         //instance.patchCustomersByIDProductListsByID(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be();
    //         //})
    //
    //     })
    // })
    //
    // describe('patchCustomersByIDProductListsByIDItemsByID', () => {
    //     it('should call patchCustomersByIDProductListsByIDItemsByID successfully', () => {
    //         //uncomment below and update the code to test patchCustomersByIDProductListsByIDItemsByID
    //         //instance.patchCustomersByIDProductListsByIDItemsByID(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be();
    //         //})
    //
    //     })
    // })
    //
    // describe('postCustomers', () => {
    //     it('should call postCustomers successfully', () => {
    //         //uncomment below and update the code to test postCustomers
    //         //instance.postCustomers(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be();
    //         //})
    //
    //     })
    // })
    //
    // describe('postCustomersAuth', () => {
    //     it('should call postCustomersAuth successfully', () => {
    //         //uncomment below and update the code to test postCustomersAuth
    //         //instance.postCustomersAuth(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be();
    //         //})
    //
    //     })
    // })
    //
    // describe('postCustomersByIDAddresses', () => {
    //     it('should call postCustomersByIDAddresses successfully', () => {
    //         //uncomment below and update the code to test postCustomersByIDAddresses
    //         //instance.postCustomersByIDAddresses(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be();
    //         //})
    //
    //     })
    // })
    //
    // describe('postCustomersByIDAuth', () => {
    //     it('should call postCustomersByIDAuth successfully', () => {
    //         //uncomment below and update the code to test postCustomersByIDAuth
    //         //instance.postCustomersByIDAuth(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be();
    //         //})
    //
    //     })
    // })
    //
    // describe('postCustomersByIDPasswordReset', () => {
    //     it('should call postCustomersByIDPasswordReset successfully', () => {
    //         //uncomment below and update the code to test postCustomersByIDPasswordReset
    //         //instance.postCustomersByIDPasswordReset(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be();
    //         //})
    //
    //     })
    // })
    //
    // describe('postCustomersByIDPaymentInstruments', () => {
    //     it('should call postCustomersByIDPaymentInstruments successfully', () => {
    //         //uncomment below and update the code to test postCustomersByIDPaymentInstruments
    //         //instance.postCustomersByIDPaymentInstruments(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be();
    //         //})
    //
    //     })
    // })
    //
    // describe('postCustomersByIDProductLists', () => {
    //     it('should call postCustomersByIDProductLists successfully', () => {
    //         //uncomment below and update the code to test postCustomersByIDProductLists
    //         //instance.postCustomersByIDProductLists(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be();
    //         //})
    //
    //     })
    // })
    //
    // describe('postCustomersByIDProductListsByIDItems', () => {
    //     it('should call postCustomersByIDProductListsByIDItems successfully', () => {
    //         //uncomment below and update the code to test postCustomersByIDProductListsByIDItems
    //         //instance.postCustomersByIDProductListsByIDItems(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be();
    //         //})
    //
    //     })
    // })
    //
    // describe('postCustomersPasswordReset', () => {
    //     it('should call postCustomersPasswordReset successfully', () => {
    //         //uncomment below and update the code to test postCustomersPasswordReset
    //         //instance.postCustomersPasswordReset(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be();
    //         //})
    //
    //     })
    // })
    //
    // describe('putCustomersByIDPassword', () => {
    //     it('should call putCustomersByIDPassword successfully', () => {
    //         //uncomment below and update the code to test putCustomersByIDPassword
    //         //instance.putCustomersByIDPassword(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be();
    //         //})
    //
    //     })
    // })
})
