import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';

// Load ENV variables
dotenv.config({ path: path.join(__dirname, '/../.env') });

// Connection helper
const api = {
  connection: axios.create({
    baseURL: process.env.SOURCE_API_URL
  }),
  endpoints: {
    search: '/sites/MLA/search',
    detail: '/items',
    category: '/categories'
  }
};

const apiRouter = app => {
  app.get('/', (req, response) =>
    response.status(200).send('Welcome to Mercado Libre FE Test custom API')
  );

  app.get('/items', async (request, response, next) => {
    try {
      // process request and dispatch await call
      const { q } = request.query;
      const {
        data: { filters, results }
      } = await api.connection.get(`${api.endpoints.search}?q=${q}&limit=4`);

      // format data
      // TODO: this should be parsed separately
      const searchResults = {
        author: {
          name: 'Just',
          lasname: 'Auser'
        },
        categories: filters
          .find(item => item.id === 'category')
          .values.find(item => item.path_from_root.length)
          .path_from_root.map(item => item.name),
        items: results.map(item => ({
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
          id: item.id,
          location: item.address.state_name,
          picture: item.thumbnail,
          price: {
            amount: item.price.toString().split('.')[0],
            currency: item.currency_id,
            decimals: item.price.toString().split('.')[1] || false
          },
          title: item.title
        }))
      };

      // send response
      response.send(searchResults);
    } catch (error) {
      next(error.data);
    }
  });

  app.get('/item/:id', async (request, response, next) => {
    try {
      // process request and dispatch await call
      const {
        params: { id }
      } = request;
      const [
        { data: itemDetail },
        { data: itemDescription }
      ] = await Promise.all([
        api.connection.get(`${api.endpoints.detail}/${id}`),
        api.connection.get(`${api.endpoints.detail}/${id}/description`)
      ]);

      // fetch category data
      // https://developers.mercadolibre.com/en_us/categories-and-listings
      const { category_id: categoryId } = itemDetail;
      const { data: categoryDetail } = await api.connection.get(
        `${api.endpoints.category}/${categoryId}`
      );

      // format data
      const itemDetails = {
        author: {
          name: 'Just',
          lasname: 'Auser'
        },
        categories: categoryDetail.path_from_root.map(item => item.name),
        item: {
          id: itemDetail.id,
          title: itemDetail.title,
          price: {
            amount: itemDetail.price.toString().split('.')[0],
            currency: itemDetail.currency_id,
            decimals: itemDetail.price.toString().split('.')[1] || false
          },
          picture: itemDetail.pictures && itemDetail.pictures[0].url,
          free_shipping: itemDetail.shipping.free_shipping,
          sold_quantity: itemDetail.sold_quantity,
          description: itemDescription.plain_text
        }
      };

      // send response
      response.send(itemDetails);
    } catch (error) {
      next(error.data);
    }
  });
};

export default apiRouter;
