import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('Все');
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      type: 'audio',
      title: 'Персональная песня "С днём рождения, Анна"',
      description: 'Уникальный трек с именем именинницы',
      tag: 'Песня',
    },
    {
      type: 'video',
      title: 'Оживлённое семейное фото',
      description: 'Движение, свет и эмоции в старом кадре',
      tag: 'Анимация фото',
    },
    {
      type: 'poster',
      title: 'Интерьерный постер "Космос внутри"',
      description: 'Персонализированный арт для гостиной',
      tag: 'Постер',
    },
  ];

  const services = [
    {
      icon: 'MessageSquare',
      title: 'Персональные поздравления',
      description: 'Текст и аудио-версия с профессиональным озвучиванием',
      price: 'от 999 ₽',
    },
    {
      icon: 'Video',
      title: 'Видео-поздравления',
      description: 'Анимация, стилизация и живые подписи',
      price: 'от 2 499 ₽',
    },
    {
      icon: 'Music',
      title: 'Персональные песни',
      description: 'Куплет с именем, настроение под заказ, mp3 + обложка',
      price: 'от 6 999 ₽',
    },
    {
      icon: 'Camera',
      title: 'Нейрофотосессии',
      description: 'Оживление фото: анимация движения и света',
      price: 'от 1 499 ₽',
    },
    {
      icon: 'Image',
      title: 'Интерьерные постеры',
      description: 'От постера до холста, подготовка к печати',
      price: 'от 3 499 ₽',
    },
    {
      icon: 'Calendar',
      title: 'Сценарии праздника',
      description: 'Готовый план и тайм-лайн для вашего события',
      price: 'от 1 199 ₽',
    },
  ];

  const portfolio = [
    { id: 1, category: 'Песни', title: 'Песня "Мама, спасибо"', image: '🎵' },
    { id: 2, category: 'Видео', title: 'Свадебное поздравление', image: '🎬' },
    { id: 3, category: 'Анимация', title: 'Оживлённое фото 1985 года', image: '✨' },
    { id: 4, category: 'Постеры', title: 'Семейный портрет в стиле ар-деко', image: '🖼️' },
    { id: 5, category: 'Песни', title: 'Корпоративный гимн', image: '🎶' },
    { id: 6, category: 'Открытки', title: 'Открытка со знаком зодиака', image: '♌' },
  ];

  const steps = [
    {
      icon: 'MessageCircle',
      title: 'Расскажите о человеке',
      description: 'Заполните форму или пройдите быстрый квиз — имя, повод, история',
    },
    {
      icon: 'Sparkles',
      title: 'Получите демо бесплатно',
      description: '30-сек. аудио или мини-анимация за 24 часа',
    },
    {
      icon: 'CheckCircle',
      title: 'Утвердите правки',
      description: 'Мы дорабатываем до идеала',
    },
    {
      icon: 'Gift',
      title: 'Получите готовый продукт',
      description: 'Файл для отправки + опция печати/доставки',
    },
  ];

  const faq = [
    {
      question: 'Сколько времени занимает заказ?',
      answer: 'Стандартный срок — 3-7 рабочих дней. Демо-версия готова за 24 часа. Есть срочный выпуск за дополнительную плату.',
    },
    {
      question: 'Можно ли добавить имя в песню?',
      answer: 'Да! Имя, дата, даже короткая история — всё это органично вплетается в текст и мелодию.',
    },
    {
      question: 'Как будут защищены мои фото и данные?',
      answer: 'Полная конфиденциальность. Исходники удаляются по запросу после завершения проекта.',
    },
    {
      question: 'Есть ли права на использование контента?',
      answer: 'Да, передаём коммерческую лицензию на все заказные материалы.',
    },
    {
      question: 'Можно ли заказать печать и доставку?',
      answer: 'Да, работаем с доставкой по РФ и СНГ. Печать на холсте, постере или фотобумаге.',
    },
  ];

  const testimonials = [
    {
      name: 'Мария К.',
      occasion: 'День рождения мамы',
      text: 'Песня довела гостей до слёз — спасибо! Мама пересматривала видео раз 20.',
    },
    {
      name: 'Дмитрий П.',
      occasion: 'Корпоратив',
      text: 'Заказали персонализированные открытки для всей команды. Все в восторге!',
    },
    {
      name: 'Анна Л.',
      occasion: 'Годовщина свадьбы',
      text: 'Оживили наше свадебное фото — это магия! Теперь висит в рамке в гостиной.',
    },
  ];

  const filteredPortfolio =
    activeFilter === 'Все'
      ? portfolio
      : portfolio.filter((item) => item.category === activeFilter);

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заявка отправлена! Мы свяжемся с вами в течение 24 часов.');
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-primary" size={28} />
            <span className="text-xl font-bold">НейроСтудия</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#portfolio" className="hover:text-primary transition-colors">
              Портфолио
            </a>
            <a href="#prices" className="hover:text-primary transition-colors">
              Цены
            </a>
            <a href="#faq" className="hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>
          <Button>Заказать</Button>
        </div>
      </header>

      <section className="relative pt-24 pb-20 px-4 overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/50f65889-06dd-4553-8a46-ef46c669ead4/files/1bd7e0fd-9425-484c-8a16-84a9bf77bdfb.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm text-base px-4 py-2">
                <Icon name="Sparkles" className="mr-2" size={18} />
                Работаем с нейросетями
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Персональные подарки,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300">
                  которые удивляют
                </span>
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Создаём уникальные песни, оживляём фото и делаем арт с помощью нейросетей — быстро, стильно и с душой
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-2xl shadow-pink-500/50">
                  <Icon name="Gift" className="mr-2" size={20} />
                  Получить демо бесплатно
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                  <Icon name="Play" className="mr-2" size={20} />
                  Посмотреть примеры
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <Card className="overflow-hidden border-2 border-white/20 shadow-2xl backdrop-blur-sm bg-white/5 relative">
                <CardContent className="p-0">
                  <div className="relative h-[400px]">
                    <img 
                      src="https://cdn.poehali.dev/projects/50f65889-06dd-4553-8a46-ef46c669ead4/files/1bd7e0fd-9425-484c-8a16-84a9bf77bdfb.jpg"
                      alt="Нейростудия"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex flex-col justify-end p-8">
                      <Badge className="mb-4 w-fit bg-white/20 text-white border-white/30 backdrop-blur-sm">
                        {heroSlides[currentSlide].tag}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-2 text-white">{heroSlides[currentSlide].title}</h3>
                      <p className="text-purple-100">{heroSlides[currentSlide].description}</p>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 py-4 bg-white/10 backdrop-blur-sm">
                    {heroSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all ${
                          currentSlide === index ? 'bg-white w-8' : 'bg-white/40 w-2'
                        }`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Почему выбирают <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">НейроСтудию</span>
            </h2>
            <p className="text-xl text-muted-foreground">Уникальное торговое предложение</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-purple-200 bg-gradient-to-br from-purple-50 to-white group">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-xl shadow-purple-500/50">
                  <Icon name="Zap" className="text-white" size={40} />
                </div>
                <CardTitle className="text-2xl mb-4">Демо за 24 часа</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Получите пробную версию вашего заказа бесплатно уже завтра. Никаких предоплат — только результат
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-pink-200 bg-gradient-to-br from-pink-50 to-white group">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-xl shadow-pink-500/50">
                  <Icon name="Heart" className="text-white" size={40} />
                </div>
                <CardTitle className="text-2xl mb-4">100% персонализация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Имя, дата, личная история — всё вплетается в песню, видео или постер. Каждый подарок уникален
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-purple-200 bg-gradient-to-br from-blue-50 to-white group">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-xl shadow-blue-500/50">
                  <Icon name="Award" className="text-white" size={40} />
                </div>
                <CardTitle className="text-2xl mb-4">Премиум-качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Студийный мастеринг аудио, печать на холсте, профессиональная обработка. Подарок достойного уровня
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-2xl">
              <CardContent className="p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 text-left">
                    <h3 className="text-3xl font-bold mb-4">Не знаете, что подарить?</h3>
                    <p className="text-xl text-purple-100">
                      Закажите бесплатную консультацию — подберём идеальный вариант под ваш повод и бюджет
                    </p>
                  </div>
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-6 shadow-xl">
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    Получить консультацию
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Почему это работает</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" className="text-primary" size={32} />
                </div>
                <CardTitle>Быстро</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Демо-версии за 24 часа</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" className="text-secondary" size={32} />
                </div>
                <CardTitle>Персонально</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Имя, дата, история — в каждом продукте</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
                <CardTitle>Премиально</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Печать и материалы для интерьера, студийный мастеринг
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Услуги</h2>
            <p className="text-muted-foreground">Создаём эмоции с помощью нейросетей</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="ghost" size="sm">
                      <Icon name="ArrowRight" size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Портфолио</h2>
            <p className="text-muted-foreground mb-8">Примеры наших работ</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {['Все', 'Песни', 'Видео', 'Анимация', 'Постеры', 'Открытки'].map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? 'default' : 'outline'}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                  {item.image}
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    {item.category}
                  </Badge>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Icon name="Play" className="mr-1" size={14} />
                      Смотреть
                    </Button>
                    <Button size="sm" className="flex-1">
                      Заказать похожее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Как это работает</h2>
            <p className="text-white/80">Всего 4 простых шага до готового продукта</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={step.icon as any} className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold mb-2">{index + 1}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-2 border-primary shadow-xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Gift" className="text-primary" size={32} />
              </div>
              <CardTitle className="text-3xl">Получите демо бесплатно</CardTitle>
              <CardDescription className="text-lg">
                30-сек. аудио-поздравление или мини-анимация за 24 часа
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleDemoSubmit} className="space-y-4">
                <div>
                  <Input placeholder="Ваше имя" required />
                </div>
                <div>
                  <Input placeholder="Email или Telegram" required />
                </div>
                <div>
                  <Textarea placeholder="Повод и краткая история (например: день рождения сестры, 30 лет, любит котов)" rows={4} required />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Sparkles" className="mr-2" size={20} />
                  Получить демо бесплатно
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Цены</h2>
            <p className="text-muted-foreground">Ориентировочная стоимость услуг</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-4">{service.price}</div>
                  <Button className="w-full">Заказать</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8">
            Точные цены после брифинга • Доступны пакеты и срочный выпуск
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Отзывы</h2>
            <p className="text-muted-foreground">Что говорят наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{testimonial.occasion}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Почему нам доверяют</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Завершённых проектов</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Довольных клиентов</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">24ч</div>
              <p className="text-muted-foreground">Среднее время демо</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" size={24} />
                <span className="text-xl font-bold">НейроСтудия</span>
              </div>
              <p className="text-gray-400 text-sm">
                Персональные подарки с душой и нейросетями
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Ссылки</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Услуги
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-white transition-colors">
                    Портфолио
                  </a>
                </li>
                <li>
                  <a href="#prices" className="hover:text-white transition-colors">
                    Цены
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  hello@neurostudio.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Send" size={16} />
                  @neurostudio_bot
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Подписка</h3>
              <p className="text-sm text-gray-400 mb-4">
                Идеи подарков раз в неделю
              </p>
              <div className="flex gap-2">
                <Input placeholder="Email" className="bg-gray-800 border-gray-700" />
                <Button>
                  <Icon name="Send" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 НейроСтудия. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 md:hidden">
        <Button size="lg" className="rounded-full shadow-2xl">
          <Icon name="Sparkles" className="mr-2" size={20} />
          Заказать
        </Button>
      </div>
    </div>
  );
};

export default Index;