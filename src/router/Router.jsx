import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { HeaderOnly } from "../components/templates/HeaderOnly";

//ページ遷移のURLによる分岐を表す
export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
            {/* トップページ */}
          </DefaultLayout>
        </Route>

        <Route path="/users">
          <HeaderOnly>
            <Users />
            {/* ユーザー一覧ページ */}
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
