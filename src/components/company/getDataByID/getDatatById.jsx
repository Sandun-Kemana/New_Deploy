import { Link as RouterLink } from 'react-router-dom';
import { useCompaniesByID } from '../../../hooks/use-companies-connector/getByID/use-company-getbyid-connector';

const GetCompany = () => {
  const { data, loading, error } = useCompaniesByID();

  console.log(data);

  return (
    <div>
      {data?.results?.id?.map((item, key, id) => {
        return (
          <div key={key}>
            <form>
              <input type="text" name="ID" value={item?.id} />
              <input type="text" name="Name" value={item?.value?.name} />
              <input type="text" name="Address" value={item?.value?.address} />
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default GetCompany;
