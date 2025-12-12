FROM php:8.2-fpm

ARG USER
ARG USER_ID
ARG GROUP_ID

WORKDIR /var/www

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

RUN apt-get update && apt-get install -y procps \
    git \
    zip \
    unzip \
    curl \
    vim \
    libicu-dev \
    iputils-ping \
    sudo \
    wget 

RUN curl -sL https://deb.nodesource.com/setup_18.x | bash \
    && apt-get install nodejs -y

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN apt-get update && apt-get install -y \
        libpng-dev \
        libzip-dev \
        && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-configure intl
RUN docker-php-ext-install pdo pdo_mysql intl gd zip

COPY php.ini "${PHP_INI_DIR}/conf.d/custom.ini"




#RUN pecl install xdebug \
   # && docker-php-ext-enable xdebug

#COPY xdebug.ini "${PHP_INI_DIR}/conf.d"
RUN groupadd --force -g $GROUP_ID $USER
RUN useradd -ms /bin/bash --no-user-group -g $GROUP_ID -u 1337 $USER
RUN usermod -u $USER_ID $USER
RUN usermod -aG sudo $USER
USER $USER


