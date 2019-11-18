# Изучение реакта

Сборник полезных советов для первого изучения реакта

Список полезных ссылок можно найти [тут - awesome-react](https://github.com/enaqx/awesome-react)

## Прежде чем приступить

Ознакомится с документацией по CRA [Create a New React App](https://reactjs.org/docs/create-a-new-react-app.html)

Создать приложение с помощью

```sh
npx create-react-app my-app
cd my-app
npm start
```

В новой папке `my-app`  будет представлено классическое приложения с необходимыми папкафи а файлами. Нужно изучить полученные файлы для дальнейшей работы с ними.

Полезные источники:
- [File Structure](https://reactjs.org/docs/faq-structure.html)


## В изучении JSX

Подробно можно ознакоится по ссылки [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)

Основная цель:
- Научится писать привычный HTML в js файлах
- Понять как передавать все типы переменных: number, string, null, undefined, object, boolean
- spread операторы работают как обычные

Полезные источники:
- [Babel repl](https://babeljs.io/repl) - с ключенным react - позволяет посмотреть к какому виду jsx преобразовывается в js
- [Знакомство с JSX](https://learn-reactjs.ru/basics/introduction-to-jsx)
- [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
- [JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html)
- [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html) - прицип отображения компонентов в зависимости от правил переданных через `props`
- [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html) - принцип отображения данных в виде списка и понимая реакта, какие дом узлы нужно ререндерить

## Компонентный подход

Цель:
- Разобраться в принципе создания компонентов
- Разобраться разницу между фуникциональными компонентами и созданными с помощью классов
- Узнать методы жизненного цикла компонентов на основе классов [React.Component](https://reactjs.org/docs/react-component.html)
- Понять что через props можно передавать не только значения, но и фукнции которые могут быть вызваны в дочернем компоненты с разными свойствами [Render Props](https://reactjs.org/docs/react-component.html)

Полезные ссылки:
- [Components and Props](https://reactjs.org/docs/components-and-props.html)
- [How Are Function Components Different from Classes?](https://overreacted.io/how-are-function-components-different-from-classes/)

## События в реакте

Из за принципа построения виртуального дерева, события в реакте срабатывают по принципу [Делегирования событий](https://learn.javascript.ru/event-delegation). Потому события на реальном дом дереве будут в большем приоритете чем на виртуальном и это нужно учитывать при проектировании систем с возможными сторонними библиотеками.

Основная цель это добавить событие на нужный дом элемент и дождиться его вызова с помощью [Handling Events](https://learn.javascript.ru/event-delegation)

События в реакте принято считать синтетическими событиями [SyntheticEvent](https://reactjs.org/docs/events.html)

## Интеграция с библиотеками и реальным деревом

В реакте есть несколько методов управления компонентами, один из них это нативный. Заключается данный метод в чтение параментов и управления из реального дом дерева или подключения к компонету посредством [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html). Такой подход позволяет считывать данные из элемнетов и расчитывать их восоты, ширину, положения а так же строить приложения с внедрением сторонних библиотек [Integrating with Other Libraries](https://reactjs.org/docs/integrating-with-other-libraries.html)

## Встроенные компоненты

- [Fragments](https://reactjs.org/docs/fragments.html) - с помощью данного компоненты была добавлена возможность рендеринга массива. Проблема заключалась в том, что компонент должен быть вернуть обязательно один элемент и не более, таким образом необходимо было создавать тег (div, span...) перед массивом компонентов, что могло нарушить структуру html.
- [Portals](https://reactjs.org/docs/portals.html) - возможность рендеринга компонентов в заданном дом элементе. События всплывают по виртуальному дереву, что нужно учитывать при проектировании.
- [Profiler API](https://reactjs.org/docs/profiler.html) - используется только в режиме разработки. Нужно для отлавливания узких мест в рендеренги реакт компонентов
- [Suspense API](https://reactjs.org/docs/concurrent-mode-reference.html#suspense) - (**Эксперементальная фича**) - Позволяет дожидаться завершения асинхронного кода до момента отображения родителей. Нужно для показа лоадера при загрузки даннных, таким образом контент не сломается, пока данные еще не пришли.


## Полезные библиотеки

- [redux](https://redux.js.org/)
- [redux-saga](https://redux-saga.js.org/)
- [react-router](https://reacttraining.com/react-router/web/guides/quick-start)

## Полезные расширения

- [react-developer-tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

