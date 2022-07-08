const SEND_MESSAGE = 'SEND-MESSAGE';
const TYPE_MESSAGE = 'TYPE-MESSAGE';

const initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Murka',
            image: 'https://t4.ftcdn.net/jpg/02/63/04/43/360_F_263044311_eLTaYpz9zQ61fVP4rSWAfkpG2HlspXIK.jpg',
        },
        {
            id: 2,
            name: 'Kasia',
            image: 'https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg',
        },
        {
            id: 3,
            name: 'Barsik',
            image: 'https://www.ozarksfirst.com/wp-content/uploads/sites/65/2020/03/cat-in-belgium.jpg',
        },
        {
            id: 4,
            name: 'Murzik',
            image: 'https://s0.rbk.ru/v6_top_pics/media/img/6/67/756484737186676.jpg',
        },
        {
            id: 5,
            name: 'Pushok',
            image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhAVFRIXFRUVFRUVFRUVFRUVFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NFRAPFy0dFh0rLS0rLSstLS0tKy0tKy0rKystLS0tLSstKystLS0tLSstKysrLS0tLS0rLS03LS0rK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAABAECAwUGBwj/xAA1EAACAQIDBQYEBgIDAAAAAAAAAQIDEQQhMQUSQVFhBhNxgZHwMqGxwQcUImLR4ULxI1Jy/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAcEQEBAQEBAQEBAQAAAAAAAAAAARECIRIxUQP/2gAMAwEAAhEDEQA/APowABpkAAAAAAAAAAAAAAAAAAABBIAAAAAAAAAQSAEASQAEEkFAAMAIsAABcAAgAAwxGLhTV5ysvm/BAbgc6G2aTerXih6lVUs07hVwAAgAAAAAAAAAAAAAAAhsCQBAAATGNxbG46NNPds5c27RX8lG9SSiryaS6nPjtmg3uqpn4WXk2cLaFdz+Oblfqlfok+B5/GRaeSa6v/Zm9Nzl9LhK5Y5PZnEudCLk7yV0/I6xWUEEgVFSQAC4ABAM8f2hquVbdbyikrfP7nsGeL7R07Yi9tUn8iVrn9TQs8n6Wv8Ac6GHg18FTylfIwwdLL4UvS/v3YcUYrVu/jb+BGvD+Hxz0qRt11XqPKSZw4yX/aLXJ/e2QxhpOOjy4xedis2Oo2Ui7uyK0/1PIdp0bBks78ic+Q73NysqDQCTuQ6th5U8hatpawGanfQtGLNKLVkiakdLPowqkaT0bNKlJF1FGcrgYq+paPyJnMTxNayy0Wf+hpjavWunFOy4834nOxMacc2s/wDs0vlvNGcFOWbulyTzb6taFu4azvBdd5p/TMmrjl4nEPhJtftUH6pnntoVG3rfrbdfg1wZ7GtQTV91SXHJbz87Z+aPH7couE7528LNGa6cvXdj4f8AB4yZ3RHYlHcoU1x3U355jxuOVQDBkFRBIWAC4ABAHn+1OGdoVIuzTs/B53PQC2Pod5TlHi1l48BVlyuPgY2jqut9W+ba49B2NuvkvucKjjJq6beWW7pa3Q3htHnFet/4JLHS812Jq/D6EQp8bWfDkZYStvZrdfPN/wBnVw1FPhYrFaYKPTP3kP04FKULGjkVlosiJSRk6hhWq2zIGJxObip29+p0KVVOIji0mmvQKyws76jNxbBw1NXKyAijUe9Y2k2xJ1UpfJDcaytqQZvl7QrVimtPfEYnVjzuUugrm1XbXLLRPQQr5K7nGK4at+LnL7HSxdLitTzm2N2OclKT4Ja+pmtcsa+Jimmq8n0SbXrIUlKVerCl8V5LyXPPTI5tarFPKNn4tvzfM9Z2K2fnKtJaZLxepme106nzNethCySWiVvQkkg6vOghkkFBckqSBYkgCAAAKOBt7Z+fexX/AKX3PPfF8OUvD6nttpKfdT7tJ1N1uKejkldRfR6eZ5nYGKjVnJ93uS3XdPRNO1mYs9duO8hnYEJN7rya98D1+GpWWYhsvAW/W0r8DqXtwNSZGO7taXOftDaEKcW5SSSzbb0NsVO0Xuq75HxbtljcXjMWsFODpQV5yV7ucY9eKKw9DtH8VMPCTUIzqpXV4RW75OTV/IY2R+J2DrSUJOVKTdk6itG/WSbS82eN7SbBoYakoRku9jGO/F5ZvVLVPdbt5Hg3BN2uv65mrx85qc9Tr8fqHCVb6P8AS80N922fKPwj23UhUhhKrvSqKXct6wnFbzpr9ripNcnHqfZVT4mbMWVzqUbXOXjcVZnYr5X66HBxtC7MVqOXtHbEaMXVqSUYpas8FtP8Upt7tClePCU21frupfVnN/EXGTq13Ri/+OlbLnNq7b8E16s81j4Uo5Um3HnJWle3+S4MsnmlvuPX4f8AEjFJ3nRhKP7W0163Pf8AZ/tVDEwUo5c1fNHx3s+4ymoPNO+qPR9mdhVfz86VKbjTjGNSTWiUtF9fQt5yakvuPr0Kqkc3bOCvFtP01H8JgtxJXu+perF8TFalx80xzhRanPeaavbw1yPpfZiW9hqU91x34Ke69VvZpPrax5btNsPv91q27f8AUuLT1s+B7fBq0IrkkhzF762RsQSQbc0EMkqUFgAALgQAAAABEhHCbNXfSqLJS+Jfu5rxshyTGcHCy8SKZirEsGZtlRWpI8j2x2FOrKni8PHer0VJOF0nVpS+KCb/AMk81fquNz1kisoEHwntrPv3vNuNRP8AVGacZxlq96LzT8jyezcDKU8leXLX1P07XoQqZVKUJx/dGMvqhej2XwF7/k6K6d3FL0tY6XvbLWZzkyPlGzaTp1MHTp3lUVaNSUoZxjZ7m7vLK9pybXCyPudSskjJ0IpJRgkkkkkkkktEktEea7UbZnRUYU4uVWct2MVbPJt5vRZZvkZt+l5mR1MXVtnfPh8zlSxyvaVvDQ8pi9qY3e/XSp5t5RqZrnnJW4cjjY3beIjWpupBKG9utxbeUmkm79TFjp89fxy+0WwcR+drbtGc6dSW/GUVf/Fa8n/B5XaOyKkXZ05p8tyV/NWvc+/7JinFTTUlzO5TqxsnbMvN8xmz3XwDsl2arykp/lqsrWcVuNJvrOVopeLPr/ZjYbw0Jzq2deq1Kpu/DFJWhTi3m1FceLbeVzuVsWuHra4rPEPgL1viTn3Ud7mKYmsitas+WQjXn1MNtpS3smdXZ2IbVnwOJTmPbPqWkJfSu2QyEyTbCGVZZlWUAABBYCCLlEgQABYfgshCOp0EAMIxBssgMJRCxlXqE0Zt8ANoQGIIzjEs5JLiyBi60ueI7X9nZVJuvSxEqdTda3WlKnpZytk07cmvqetlJ8EvEQx1SKV5NBY+K08RiKVOSr1N6pDEOmnxcbQd/WT1MNhbCr46pUlOvJUlNw/Ta7S5PgdP8RsJTq1ISg3CTnGMmst5XSWXG3B+J7nYdCjSpRhSW7BLLq3rm9Xe7d+ZNdb/AKW8yH8DRhh6UYRT3IRUVnd2XMt+aT0eqvbi+qJk5apowk53/VFNeGZHNWddvg7+Qt3/ADf1Kzgs92cl+2Wa9WroRqSknwbM2q6Hf35mNWPEzoVHyt4ZjDlcCkEM4SVpLxMYySyLYT414iFekiyWRAk6sIZUkgAAAIJAAKAgkALQHd4QT6HQjogItctKWRSUzKrMDKvPqRhtRepLPIqq1veX9kHXdTkis6vNpCKxN1m7fco5rgaGmLxSS1+x5raeJ3k0k5Plrxy6LRjuPUpNKPLX6MmGzlGK4vJt8+RmrHgNqdn6+Ie85bqXwrPXLV8WrHawVKrRioze/ZJXimm0uNnl6Ho68VHo/fvzF6073+XXoZaI4fHxmm7v10/j/Xkyqqss2+X+v4ORtCi4tTWXPqufyNKeJSWqsQdP8zw+TTFq07vLJ9MvRGP5tPr4/aXtGed9fJ5+nPyJVO0ZdffgMN5aCMJmyk+YRtJXzeoxs6lefgJRkdTZObuWJXXiSQQdGQyAbAgAAAAAAAAgkCYjtCV4iLGsIiwWmxWvUY7UiKuhco5VapJ5L5EUKUueZ0vy60saU6XIypejhOLZpHCLMb3bAzUQr3CQnOteTfIZx1RpWRxZVXG/P3mSqrj6nH3zEqlX9JNfECcajd14fSxirDF96Nn7/sQrYVZoYpStkWUbmapSnSsvt/HIJUn5fL0HnSJjAzisIX4rzWpr5mqplu6KKU0d/ZlKyu9WcenDM9FQWSN8s1qQyUVNsgAIIAkgAJuQAAAAAEnRoRyEKMbs6UUIM5ldEaTM5M0Mm7loEzCJASkYYirZdS9WZza9a7GiKtW7Fq8E8/fD35lKlVLxF54uyJql8RS15iip2yGKmMjr4f38iu8mYqqKlmaxgXg+HQnd4kVKRO4BfgBSyC3IJoi4FqTzO9hZ3ijgQZ1tnVOBqJT7ZFwZBpkAAAAAAUAABAQAIBrBRzH7GOFpqKGLgZTRk0MNGU0UZFJzSJmxWpIUVxFS4hXYxVzeQnWfBGapWSvd8xStT4+h0LZaikpxWs79ErmKrnKhzNu4aV0FfEu/6Y3S4tW+QxTrJrPL6EVSKdvobaq5MIo0kkijFA52DR2IYA5EJFJaFoZgaxQzg6tmhdOxeKKO9GVwFsHUurDJtkEElQiQAAqSAAIC9CF2Z3HcPHIBuCNDKBqUQ0ZzRoVkAtUgL1KY5KK5mNV8gEqlLIWlhxupUfFCtWu18MTNUtLBp8CO57tNrNcn9ilTffFrwKwwLebb8zKl3BTd27Lgl9WRPDXeWi4DHcNaZdSr3ormQQqFkRNPQ0lXS1TB1YviAq4WZDRpUlw15FHcKrKIKNi4WAktTCKKpgPYR5nTucaDOnQndG4lasgkgrIAAAkgAAmGp0aKOfDU6lKORYLpFyhbeAN4pJEyjcqlYDKaF3SetxmqzBzApKlzsY1IWNJO/wDJRysRS7XDpdimKi28rqw5Uvd5mEXld+8zNGF5LwKNXYz3i5mSqq7XkRVJxX1MN1N5G6S8jN1YrQKp3KKbiLzk3oQosgpJdMwaNfEsoAZwTIsMONjGpMomMh/BTyOch3AtFiU8AAaQEAAEkAARaDzOtT0OTTWZ0qE8hCt0S4lWRvFE2Mpou5FWBiyN01dkZv5EFpRSQvUprwGHNGcvABJ0lnYXnBpW4DlbIVnUTyJVJfl8y7oJG6d/mTKJlSrhwsR+UvnYbjErUnyy5PgBjCklqZSqpBOtJi+62yK2VXeJdRcGvUp3b5LzM5UlyA1niF4mXeX4FXZZGdho3bHcAjmb3A62BjkaiU2AAaQABAEgwADWjxGcMSAgbRnMAKiESiQKMpFKnAAILT4eJWrxACBStoIT1QAZrSIa+v1NJ6P3wACC1Ph4GMv4+xIAIQ198kM0wAitJC9cAKFJakABlQ9UdyhogA3Ga1AANIgAAD//2Q==',
        },
    ],
    messages: [
        {
            id: 1,
            message: 'Hi',
        },
        {
            id: 2,
            message: 'Hello',
        },
        {
            id: 3,
            message: 'Cool!!!',
        },
    ],
    newMessageText: '',
};

const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: '',
            };
        }
        case TYPE_MESSAGE: {
            return { ...state, newMessageText: action.textMessage };
        }
        default:
            return state;
    }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const typeMessageActionCreator = (text) => ({
    type: TYPE_MESSAGE,
    textMessage: text,
});

export default dialogsReduser;
