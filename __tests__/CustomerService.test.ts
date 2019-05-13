import {CustomerService} from "../src/services/CustomerService";

describe('Customer Service Tests', () => {

    it('should throw error for invalid date part ', async () => {
        let customerService = new CustomerService();

        expect(() => {
            customerService._dateDiff('invalid', 10000)
        }).toThrowError('Invalid date part. Please use one of: \'y\', \'m\', \'w\', \'d\', \'h\', \'n\', \'s\'');
    });

    it('should return age from 1970 to 2019 from dateDiff ', async () => {
        let customerService = new CustomerService();
        const result = customerService._dateDiff('y', 10000);

        expect(result).toEqual(49);
    });

    it('should not add customer for being too young', async () => {
        let customerService = new CustomerService();

        expect(() => {
            customerService.addCustomer(
                'Firstname',
                'Surname',
                'test@test.com',
                new Date('2000-01-01'),
                'id1')
        }).toThrowError('Too young');
    });


    it('should add customer', async () => {
        let customerService = new CustomerService();
        const result = customerService.addCustomer('Firstname', 'Surname', 'test@test.com', new Date('1998-01-01'), 'id1');

        expect(result).toBeTruthy();
    });
});