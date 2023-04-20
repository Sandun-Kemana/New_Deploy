import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Spacings from '@commercetools-uikit/spacings';
import Channels from './components/channels';
import Products from './components/products/Products';
import Companies from './components/company/companies/Companies';
import NewCompanyForm from './components/company/postCompanyDetails/NewCompanyForm';
import Welcome from './components/welcome';
import QuotesForm from './components/quotes/quotesForm';
import Quotes from './components/quotes/Quotes';
import QWelcome from './components/quotes/welcome/welcome';
import CWelcome from './components/company/welcome/welcome';
import UpdatePage from './components/company/updateCompanyData/updateCompanyForm';
import UpdateQuotesForm from './components/quotes/UpdateQuotesform';

const ApplicationRoutes = () => {
  const match = useRouteMatch();

  /**
   * When using routes, there is a good chance that you might want to
   * restrict the access to a certain route based on the user permissions.
   * You can evaluate user permissions using the `useIsAuthorized` hook.
   * For more information see https://docs.commercetools.com/custom-applications/development/permissions
   *
   * NOTE that by default the Custom Application implicitly checks for a "View" permission,
   * otherwise it won't render. Therefore, checking for "View" permissions here
   * is redundant and not strictly necessary.
   */

  return (
    <Spacings.Inset scale="l">
      <Switch>
        <Route path={`${match.path}/channels`}>
          <Channels linkToWelcome={match.url} />
        </Route>
        <Route path={`${match.path}/products`}>
          <Products linkToWelcome={match.url} />
        </Route>
        <Route path={`${match.path}/companiesNavi/companies`}>
          <Companies linkToWelcome={match.url} />
        </Route>
        <Route path={`${match.path}/companiesNavi/newcompany`}>
          <NewCompanyForm linkToWelcome={match.url} />
        </Route>
        <Route path={`${match.path}/quotesNavi/qForm`}>
          <QuotesForm linkToWelcome={match.url} />
        </Route>
        <Route path={`${match.path}/quotesNavi/quotes`}>
          <Quotes linkToWelcome={match.url} />
        </Route>
        <Route path={`${match.path}/quotesNavi`}>
          <QWelcome linkToWelcome={match.url} />
        </Route>
        <Route path={`${match.path}/companiesNavi`}>
          <CWelcome linkToWelcome={match.url} />
        </Route>
        <Route path={`${match.path}/updatecompany/:id`}>
          <UpdatePage linkToWelcome={match.url} />
        </Route>
        <Route path={`${match.path}/updatequotes/:id`}>
          <UpdateQuotesForm linkToWelcome={match.url} />
        </Route>
        <Route>
          <Welcome />
        </Route>
      </Switch>
    </Spacings.Inset>
  );
};
ApplicationRoutes.displayName = 'ApplicationRoutes';

export default ApplicationRoutes;
