import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const List = () => {

    // State
    const [pageData, setPageData] = useState(null);

    useEffect(() => {

        fetch('https://newsapi.org/v2/top-headlines?country=tw&apiKey=dc01149c7c004404a03a135efd861e6e')
            .then((response) => response.json())
            .then((resData) => {

                setPageData(resData.articles);

            });

    }, []);

    return pageData && (

        <div className="lists">
            {
                pageData.map(({ title, url, urlToImage, publishedAt, source }, idx) => (

                    <a
                        key={idx}
                        href={url}
                        className="item"
                        title={title}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="thumb">
                            <img src={urlToImage} alt={title} />
                        </div>
                        <div className="info">
                            <h2 className="title">{title}</h2>
                            <div className="bottom">
                                {source.name}．{dayjs(publishedAt).format('YYYY/MM/DD HH:mm')}
                            </div>
                        </div>
                    </a>

                ))
            }
        </div>

    );
};

export default List;
