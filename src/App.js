import logo from './logo.svg';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { logiPath, stringToInt } from './class/export-import';
import JsxInReact from './class/jsx_in_react';
//const JsxInReact = lazy(() => import('./class/jsx_in_react'));
import ComponentTypes from './class/component-types';
//const ComponentTypes = lazy(() => import('./class/component-types'))
import ExportImport from './class/export-import';
//const ExportImport = lazy(() => import('./class/export-import'))
import AttributesExpressions from './class/attributes-expressions';
//const AttributesExpressions = lazy(() => import('./class/attributes-expressions'))
import ComponentStyling from './class/coponent-styling';
import PropsReact from './class/props-react';
import MapMethod from './class/map-method';
import WaysToCreateFunctionalComponents from './class/ways-to-create-functional-components';
import ChildProps from './class/child-props';
import Fragements from './class/fragements';
import EventHandling from './class/event-handling';
import StatesInReact from './class/states-in-react';
import BackgroundColorChange from './class/background-color-change';
import CounterApp from './class/counter-app';
import PropsDestrecturing from './class/props-destrecturing';
import TwowayDataBinding from './class/twoway-databinding';
import ConditionalRendering from './class/conditional-rendering';
import UseeffectHook from './class/useeffect-hook';
import ApiCall from './class/api-call';
import StaticImages from './class/include-static-images';
import ChildRouting, { Info, Profile } from './class/child-routing';
import RouteQueryParameters, { RouteParameters, QueryParameters } from './class/route-query-parameters';
import LinkAndAnchor, { LinkComponent, AnchorComponent } from './class/link-anchor-tags';
import WildCardRoutes from './class/error-handling-routs';
import ListsKeys from './class/lists-keys';
import UseRefHook from './class/use-ref-hook';
import CustomHooks from './class/custom-hooks';
import PropsDrilling from './class/props-drilling';
import UseContextHook from './class/use-context-hook';
import UseMemoHook from './class/use-memo-hook';
import DataFromChildToParent from './class/send-data-child-parent';
import ComponentLifecycle from './class/component-lifecycle';
import InstallBootstrap from './class/install-bootstrap';
import FormHandling from './class/form-handling';
import FormValidation from './class/form-validation';
import ApiIntegration from './class/api-integration';
import ApiAxios from './class/axios-api';
import LazyloadingConditional from './class/lazyloading-conditionalrendering';
import LazyloadingRouting from './class/lazyloading-routing';
//const LazyloadingRouting1 = lazy(()=>import('./class/lazyloading-routing'));
import HigherOrderComponents from './class/higher-order-component';
import PropsTypes from './class/props-types';
import DefaultProps from './class/default-props';
import Protals from './class/portals';
import UseReducerHook from './class/use-reducer-hook';
import ReduxTest from './class/redux-test';
import ReactQuery from './class/use-query';
import Todolist from './class/todo-list';
import CounterDemo from './class/counter-demo';
import Stopwatch from './class/stopwatch-app';
import UseCallBack from './class/usecallback';
function App() {

  const btnJsxAction = () => {
    // history.push('/jsx_in_react')
  }

  return (
    <>
      <BrowserRouter>
        <ul>
          <li><Link to="class/jsx_in_react">1.Jsx in react</Link></li>
          <li><Link to="class/component-types">2.Components in react</Link></li>
          <li><Link to="class/export-import">3.Export & Import in react</Link></li>
          <li><Link to="class/attributes-expressions">4.Attributes & Expressions in react</Link></li>
          <li><Link to="class/component-styling">6.Component styling in react</Link></li>
          <li><Link to="class/props-react">7.Props in react</Link></li>
          <li><Link to="class/map-method">8.Map method in react</Link></li>
          <li><Link to="class/ways-to-create-functional-components">9.Ways to create functional components in react</Link></li>
          <li><Link to="class/child-props">10.Child props in react</Link></li>
          <li><Link to="class/fragements">10.Fragements in react</Link></li>
          <li><Link to="class/event-handling">11.EventHandling in react</Link></li>
          <li><Link to="class/states-in-react">12.States in react</Link></li>
          <li><Link to="class/background-color-change">13.Background color change</Link></li>
          <li><Link to="class/counter-app">14.Counter app</Link></li>
          <li><Link to="class/props-destrecturing">15.Props destrecturing</Link></li>
          <li><Link to="class/todo-list">16.Todo app</Link></li>
          <li><Link to="class/twoway-databinding">17.Two way data binding</Link> </li>
          <li><Link to="">18.Calculator app</Link> </li>
          <li><Link to="">19.What is virtual DOM in react</Link> </li>
          <li><Link to="class/conditonal-rendering">20.Conditional rendering in react</Link></li>
          <li><Link to="class/useeffect-hook">21.Useeffect Hook in react</Link></li>
          <li><Link to="class/api-call">22.How to make api call in react</Link></li>
          <li><Link to="class/include-static-images">23.Static image display in react</Link></li>
          <li><Link to="class/child-routing">24.Nested routing & Child routing in react</Link></li>
          <li><Link to="class/route-query-parameters">25.Query parameters & Route parameters</Link></li>
          <li><Link to="class/link-anchor-tags" >26.Link tag vs anchor tag</Link></li>
          <li><Link to="class/lists-keys">27.Lists&keys in react</Link></li>
          <li><Link to="class/use-ref-hook">28.UseRef Hook in react</Link></li>
          <li><Link to="class/custom-hooks">29.Custom hooks in react</Link></li>
          <li><Link to="class/props-drilling">30.Props drilling in react</Link></li>
          <li><Link to="class/use-context-hook">31.Use context hook in react</Link></li>
          <li><Link to="class/use-memo-hook">32.Use memo hook in react</Link></li>
          <li><Link to="class/send-data-child-parent">33.Send data from child to parent.</Link></li>
          <li><Link to="class/component-lifecycle">34.Component life cycle methods</Link></li>
          <li><Link to="class/install-bootstrap">35.Install bootstrap in react</Link></li>
          <li><Link to="class/form-handling" >36.Form handling in react</Link></li>
          <li><Link to="class/form-validation">37.Form validation in react</Link></li>
          <li><Link to="class/api-integration">38.Api integration in react</Link></li>
          <li><Link to="class/axios-api">39.Axios integration in react</Link></li>
          <li><Link to="class/lazyloading-conditionalrendering">40.Lazyloading with conditiona</Link></li>
          <li><Link to="class/higher-order-component">41.Higher order components</Link></li>
          <li><Link to="class/props-types">42.Props types in react</Link></li>
          <li><Link to="class/default-props">43.Default props in react</Link></li>
          <li><Link to="class/portals">44.Portals in react</Link></li>
          <li><Link to="class/use-reducer-hook">45.UseReducerHook in react</Link></li>
          <li><Link to="class/redux-test">46.Redux in react</Link></li>
          <li><Link to="class/react-query">47.React Query</Link></li>
          <li><Link to="class/counter-demo">48.Counter App</Link></li>
          <li><Link to="class/stopwatch-app">49.Stop Watch</Link></li>
          <li><Link to="class/use-call-back">50.Use Callback hook</Link></li>
        </ul>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Routes>
          <Route path='class/jsx_in_react' element={<JsxInReact />} />
          <Route path='class/component-types' element={<ComponentTypes />} />
          <Route path='class/export-import' element={<ExportImport />} />
          <Route path='class/attributes-expressions' element={<AttributesExpressions />} />
          <Route path='class/component-styling' element={<ComponentStyling />} />
          <Route path='class/props-react' element={<PropsReact />} />
          <Route path='class/map-method' element={<MapMethod />} />
          <Route path='class/ways-to-create-functional-components' element={<WaysToCreateFunctionalComponents />} />
          <Route path='class/child-props' element={<ChildProps />} />
          <Route path='class/fragements' element={<Fragements />} />
          <Route path='class/event-handling' element={<EventHandling />} />
          <Route path='class/states-in-react' element={<StatesInReact />} />
          <Route path='class/background-color-change' element={<BackgroundColorChange />} />
          <Route path='class/counter-app' element={<CounterApp />} />
          <Route path='class/props-destrecturing' element={<PropsDestrecturing />} />
          <Route path='class/todo-list' element={<Todolist />} />
          <Route path='class/twoway-databinding' element={<TwowayDataBinding />} />
          <Route path='class/conditonal-rendering' element={<ConditionalRendering />} />
          <Route path='class/useeffect-hook' element={<UseeffectHook />} />
          <Route path='class/api-call' element={<ApiCall />} />
          <Route path='class/include-static-images' element={<StaticImages />} />
          <Route path='class/child-routing' element={<ChildRouting />}>
            <Route path='info' element={<Info />} />
            <Route path='profile' element={<Profile />} />
          </Route>
          <Route path='class/route-query-parameters' element={<RouteQueryParameters />}>
            <Route path='routeparem/:userId' element={<RouteParameters />} />
            <Route path='queryparam' element={<QueryParameters />} />
          </Route>
          <Route path='class/link-anchor-tags' element={<LinkAndAnchor />}>
            <Route path='link' element={<LinkComponent />} />
            <Route path='anchor' element={<AnchorComponent />} />
          </Route>
          <Route path='class/lists-keys' element={<ListsKeys />} />
          <Route path='class/use-ref-hook' element={<UseRefHook />} />
          <Route path='class/custom-hooks' element={<CustomHooks />} />
          <Route path='class/props-drilling' element={<PropsDrilling />} />
          <Route path='class/use-context-hook' element={<UseContextHook />} />
          <Route path='class/use-memo-hook' element={<UseMemoHook />} />
          <Route path='class/send-data-child-parent' element={<DataFromChildToParent />} />
          <Route path='class/component-lifecycle' element={<ComponentLifecycle />} />
          <Route path='class/install-bootstrap' element={<InstallBootstrap />} />
          <Route path='class/form-handling' element={<FormHandling />} />
          <Route path='class/form-validation' element={<FormValidation />} />
          <Route path='class/api-integration' element={<ApiIntegration />} />
          <Route path='class/axios-api' element={<ApiAxios />} />
          <Route path='class/lazyloading-conditionalrendering' element={<LazyloadingConditional />} />
          <Route path='class/lazyloading-routing' element={<LazyloadingRouting />} />
          <Route path='class/higher-order-component' element={<HigherOrderComponents />} />
          <Route path='class/props-types'element={<PropsTypes />}/>
          <Route path='class/default-props' element={<DefaultProps />} />
          <Route path='class/portals' element={<Protals />} />
          <Route path='class/use-reducer-hook' element={<UseReducerHook />}/>
          <Route path='class/redux-test'element={<ReduxTest />} />
          <Route path='class/react-query' element={<ReactQuery />}/>
          <Route path='class/counter-demo' element={<CounterDemo />} />
          <Route path='class/stopwatch-app' element={<Stopwatch />} />
          <Route path='class/use-call-back' element={<UseCallBack />}/>
          <Route path='*' element={<WildCardRoutes />} />
        </Routes>
        {/* </Suspense> */}

      </BrowserRouter>
    </>

  );
}

export default App;
