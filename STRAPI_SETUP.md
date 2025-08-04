
# Настройка Strapi для интеграции с сайтом

## Шаг 1: Установка и запуск Strapi

1. Создайте новую папку для Strapi:
```bash
npx create-strapi-app@latest cms --quickstart
cd cms
```

2. Запустите Strapi:
```bash
npm run develop
```

3. Откройте http://localhost:1337/admin и создайте аккаунт администратора.

## Шаг 2: Создание коллекций

### Коллекция "Service" (services)
1. Перейдите в Content-Type Builder
2. Создайте новую Collection Type с именем "Service"
3. Добавьте следующие поля:
   - `title` (Text) - Название сервиса
   - `slug` (UID) - URL slug (привязан к title)
   - `excerpt` (Text) - Краткое описание
   - `image` (Media) - Изображение сервиса
   - `seo_title` (Text) - SEO заголовок
   - `seo_description` (Text) - SEO описание
   - `description` (Rich Text) - Полное описание
   - `icon` (Text) - Иконка (emoji или код)

### Коллекция "Case" (cases)
1. Создайте новую Collection Type с именем "Case"
2. Добавьте следующие поля:
   - `title` (Text) - Название кейса
   - `slug` (UID) - URL slug (привязан к title)
   - `preview_text` (Text) - Краткое описание
   - `content` (Rich Text) - Полное содержание
   - `cover_image` (Media) - Главное изображение
   - `gallery` (Media) - Галерея изображений (Multiple)
   - `client` (Text) - Клиент
   - `tags` (Text) - Теги (через запятую)
   - `category` (Text) - Категория
   - `project_date` (Date) - Дата проекта
   - `featured` (Boolean) - Рекомендуемый

### Коллекция "Blog" (blogs)
1. Создайте новую Collection Type с именем "Blog"
2. Добавьте следующие поля:
   - `title` (Text) - Заголовок статьи
   - `slug` (UID) - URL slug (привязан к title)
   - `cover_image` (Media) - Изображение обложки
   - `tags` (Text) - Теги (через запятую)
   - `time` (DateTime) - Дата публикации
   - `content` (Rich Text) - Содержание статьи
   - `excerpt` (Text) - Краткое описание
   - `author` (Text) - Автор
   - `read_time` (Text) - Время чтения

## Шаг 3: Настройка разрешений

1. Перейдите в Settings > Users & Permissions Plugin > Roles
2. Выберите "Public"
3. В разделе Permissions найдите созданные коллекции и установите галочки:
   - Service: find, findOne
   - Case: find, findOne
   - Blog: find, findOne
4. Сохраните настройки

## Шаг 4: Добавление контента

1. Перейдите в Content Manager
2. Создайте несколько записей для каждой коллекции
3. Убедитесь, что все записи опубликованы (Published)

## Шаг 5: Обновление URL в проекте

Если ваш Strapi работает не на localhost:1337, обновите файл `.env`:
```
VITE_STRAPI_URL=http://your-strapi-url.com
```

## Проверка работы

1. Запустите ваш фронтенд проект
2. Откройте страницы Services, Blog и Case Studies
3. Убедитесь, что данные загружаются из Strapi

## Возможные проблемы

- **CORS ошибки**: Проверьте настройки CORS в config/middlewares.js
- **Разрешения**: Убедитесь, что настроены публичные разрешения
- **URL изображений**: Проверьте, что изображения доступны по URL
