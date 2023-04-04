import React from 'react';

const MainContent = () => {
  return (
    <div id="body">
      <section className="container">
        <h2 className="mt-4">인기 콘텐츠</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">콘텐츠 1</h5>
                <p className="card-text">콘텐츠 1에 대한 설명입니다.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">콘텐츠 2</h5>
                <p className="card-text">콘텐츠 2에 대한 설명입니다.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">콘텐츠 3</h5>
                <p className="card-text">콘텐츠 3에 대한 설명입니다.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">콘텐츠 4</h5>
                <p className="card-text">콘텐츠 4에 대한 설명입니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <h2 className="mt-4">추천 서비스</h2>
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">서비스 1</h5>
                <p className="card-text">서비스 1에 대한 설명입니다.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">서비스 2</h5>
                <p className="card-text">서비스 2에 대한 설명입니다.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">서비스 3</h5>
                <p className="card-text">서비스 3에 대한 설명입니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
