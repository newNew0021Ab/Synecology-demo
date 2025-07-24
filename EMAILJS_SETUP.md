
# Настройка EmailJS для контактной формы

## Шаги для настройки:

### 1. Регистрация на EmailJS
1. Перейдите на [emailjs.com](https://www.emailjs.com/)
2. Нажмите "Sign Up" и создайте аккаунт
3. Подтвердите email

### 2. Создание Email Service
1. В панели управления перейдите в "Email Services"
2. Нажмите "Add New Service"
3. Выберите ваш email провайдер (Gmail, Outlook, etc.)
4. Следуйте инструкциям для подключения
5. Запомните **Service ID**

### 3. Создание Email Template
1. Перейдите в "Email Templates"
2. Нажмите "Create New Template"
3. Используйте следующий шаблон:

```
Subject: Новое сообщение с сайта Synecology от {{from_name}}

Получено новое сообщение через контактную форму:

Имя: {{from_name}}
Email: {{from_email}}
Компания: {{company}}
Тип проекта: {{project_type}}

Сообщение:
{{message}}

---
Отправлено через сайт Synecology
```

4. Сохраните и запомните **Template ID**

### 4. Получение Public Key
1. Перейдите в "Account" > "General"
2. Найдите "Public Key"
3. Скопируйте значение

### 5. Обновление конфигурации
Замените значения в файле `client/src/lib/emailjs.ts`:
- `YOUR_SERVICE_ID` - на ваш Service ID
- `YOUR_TEMPLATE_ID` - на ваш Template ID  
- `YOUR_PUBLIC_KEY` - на ваш Public Key

### 6. Тестирование
После обновления конфигурации форма будет отправлять реальные email'ы!

## Лимиты бесплатного тарифа:
- 200 email в месяц
- Базовая поддержка
- Все основные функции

Этого более чем достаточно для большинства сайтов!
