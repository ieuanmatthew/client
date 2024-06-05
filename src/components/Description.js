function AboutME({title, subtitle, p1, p2, p3, page}) {
    return (
      <div className="about_me">
        <div className="left">
            <h1 className="title">{title}</h1>
            <div className={page==="Home"?"pic":"subtitle"}>
                {subtitle && subtitle}
            </div>
        </div>
        <div className="description">
            <div>
                {p1}
            </div>
            <div>
                {p2}
            </div>
            <div>
                {p3}
            </div>
        </div>
      </div>
    );
  }

  export default AboutME;