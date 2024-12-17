import Card from "./Card";

const MostSeenTrainings = () => {
  return (
    <section className="flex flex-col gap-10 md:px-desktop_padding sm:px-tablet_padding px-mobile_padding mb-16">
      <div className="flex justify-center gap-1 items-center shrink-0 self-stretch">
        <p className="font-bold md:text-3xl text-xl text-center whitespace-nowrap">
          Nos formations les plus demandées !
        </p>
        <div className="-ml-[45px] mt-[36px]">
          <svg
            width="45"
            height="12"
            viewBox="0 0 45 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44.996 2.04264C43.1343 2.17706 41.6338 2.30763 40.1333 2.39596C34.9968 2.69167 29.8562 2.87601 24.7276 3.27925C17.118 3.87452 9.65126 5.29933 2.32746 7.39236C1.00957 7.76872 -0.0423531 7.13505 0.00131185 5.85234C0.0132205 5.51439 0.58483 5.00744 0.989723 4.90375C4.35589 4.02813 7.72603 3.12564 11.1319 2.42284C18.4438 0.913554 25.8748 0.352841 33.3335 0.0840114C35.6041 0.0033624 37.9104 -0.0926446 40.1532 0.183866C41.6894 0.372047 43.4797 0.360536 45 2.04264H44.996Z"
              fill="#2234A8"
            />
            <path
              d="M28.4976 8.72559C27.3806 8.80624 26.4803 8.88458 25.58 8.93757C22.4981 9.115 19.4137 9.2256 16.3365 9.46755C11.7708 9.82471 7.29075 10.6796 2.89647 11.9354C2.10574 12.1612 1.47459 11.781 1.50079 11.0114C1.50793 10.8086 1.8509 10.5045 2.09383 10.4422C4.11354 9.91688 6.13562 9.37539 8.17913 8.95371C12.5663 8.04813 17.0249 7.7117 21.5001 7.55041C22.8625 7.50202 24.2462 7.44441 25.5919 7.61032C26.5136 7.72323 27.5878 7.71632 28.5 8.72559H28.4976Z"
              fill="#2234A8"
            />
          </svg>
        </div>
      </div>
      <div className="grid 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        <Card
          imageUrl="https://www.natech-training.com/wp-content/uploads/elementor/thumbs/formation-qhse-21-10-2018-nxubf4tozw2avsps898g13nay8rqly4gqa6dqc7uck.jpg"
          title="Health"
          description="12-Blade Apple Cutter Slicer & Corer Kit with Fruit Forks"
        />
        <Card
          imageUrl="https://detailquebec.com/wp-content/uploads/2020/06/formation_hygiene_salubrite.jpg"
          title="Outdoors"
          description="12-Blade Apple Cutter Slicer & Corer Kit with Fruit Forks"
        />
        <Card
          imageUrl="https://www.natech-training.com/wp-content/uploads/elementor/thumbs/formation-qhse-21-10-2018-nxubf4tozw2avsps898g13nay8rqly4gqa6dqc7uck.jpg"
          title="Health"
          description="12-Blade Apple Cutter Slicer & Corer Kit with Fruit Forks"
        />
        <Card
          imageUrl="https://detailquebec.com/wp-content/uploads/2020/06/formation_hygiene_salubrite.jpg"
          title="Outdoors"
          description="12-Blade Apple Cutter Slicer & Corer Kit with Fruit Forks"
        />
        <Card
          imageUrl="https://detailquebec.com/wp-content/uploads/2020/06/formation_hygiene_salubrite.jpg"
          title="Outdoors"
          description="12-Blade Apple Cutter Slicer & Corer Kit with Fruit Forks"
        />
        <Card
          imageUrl="https://detailquebec.com/wp-content/uploads/2020/06/formation_hygiene_salubrite.jpg"
          title="Outdoors"
          description="12-Blade Apple Cutter Slicer & Corer Kit with Fruit Forks"
        />
        <Card
          imageUrl="https://action-conseil-formation.com/wp-content/uploads/2023/11/Formation-hygiene-alimentaire-ACF-ROFHYA.jpg"
          title="High-Tech"
          description="12-Blade Apple Cutter Slicer & Corer Kit with Fruit Forks"
        />
        <Card
          imageUrl="https://rhreflex.com/wp-content/uploads/2024/04/BREAKING-NEWS-900-x-600-px.png"
          title="Sport"
          description="12-Blade Apple Cutter Slicer & Corer Kit with Fruit Forks"
        />
      </div>
    </section>
  );
};

export default MostSeenTrainings;
