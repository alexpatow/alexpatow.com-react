import axios from 'axios';
import IContactFormData from '../../typings/IContactFormData';
import IContactFormResponse from '../../typings/IContactFormResponse';

export async function handleContactFromSubmission(
  data: IContactFormData
): Promise<IContactFormResponse> {
  console.log(data); //tslint:disable-line
  return axios
    .post('https://41y1ntdzr2.execute-api.us-east-1.amazonaws.com/Prod', data)
    .then(response => {
      return response.data;
    });
}
