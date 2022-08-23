import {
  Admin,
  CustomRoutes,
  DataProvider,
  Loading,
  Resource,
} from 'react-admin';
import { CssBaseline } from '@mui/material';
import { useEffect, useState } from 'react';
import buildHasuraProvider from 'ra-data-hasura';
import { MenuList } from '@app/modules/menu/components/menu-list/menu-list.component';
import { MenuEdit } from '@app/modules/menu/components/menu-edit/menu-edit.component';
import { MenuCreate } from '@app/modules/menu/components/menu-create/menu-create.component';
import { authProvider } from '@app/core/auth-provider';
import { apolloClient } from '@app/core/apollo-client';
import { theme } from '@app/core/theme';
import { i18nProvider } from '@app/core/i18n';
import { CategoryList } from '@app/modules/category/components/category-list/category-list.component';
import { CategoryEdit } from '@app/modules/category/components/category-edit/category-edit.component';
import { CategoryCreate } from '@app/modules/category/components/category-create/category-create.component';
import { SettingEdit } from '@app/modules/settings/components/setting-edit/setting-edit.component';
import { Route } from 'react-router-dom';
import { Layout } from '@app/common/components/layout/layout.component';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import CategoryIcon from '@mui/icons-material/Category';

export const App = () => {
  const [dataProvider, setDataProvider] =
    useState<DataProvider<string> | null>(null);
  useEffect(() => {
    const buildDataProvider = async () => {
      const dp = await buildHasuraProvider({
        client: apolloClient,
      });

      setDataProvider(dp);
    };

    buildDataProvider();
  }, []);

  if (!dataProvider) {
    return <Loading />;
  }

  return (
    <>
      <CssBaseline />
      <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        i18nProvider={i18nProvider}
        requireAuth
        theme={theme}
        layout={Layout}
      >
        <Resource
          name="menu"
          list={MenuList}
          edit={MenuEdit}
          create={MenuCreate}
          options={{ label: 'Меню' }}
          icon={RestaurantMenuIcon}
        />
        <Resource
          name="categories"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          options={{ label: 'Категорії' }}
          icon={CategoryIcon}
        />
        <Resource name="settings" />
        <CustomRoutes>
          <Route path="/settings" element={<SettingEdit />} />
        </CustomRoutes>
      </Admin>
    </>
  );
};

export default App;
