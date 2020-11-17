import React from "react";

const EmailNewsletter = () => {
  return (
    <section className="email-newsletter">
      <h2 className="email-newsletter__title">Подписаться на рассылку</h2>
      <p className="email-newsletter__text">
        Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности позволяет оценить значение новых предложений.
      </p>
      <form className="newsletter-form email-newsletter__form" method="post">
        <input className="newsletter-form__input-text" type="text" name="name" placeholder="Имя" />
        <input className="newsletter-form__input-text" type="text" name="email" placeholder="E-mail" />
        <button className="newsletter-form__button" type="submit" aria-label="Подписаться">Подписаться</button>
      </form>
    </section>
  );
};

export default EmailNewsletter;