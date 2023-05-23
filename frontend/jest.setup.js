const nextRouterMock = {
    push: jest.fn(),
    prefetch: jest.fn(),
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
    replace: jest.fn(),
    back: jest.fn(),
    beforePopState: jest.fn(),
    reload: jest.fn(),
    events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
    },
};

jest.mock('next/router', () => ({
    __esModule: true,
    default: nextRouterMock,
    useRouter: () => ({
        ...jest.requireActual('next/router'),
        push: jest.fn(),
    }),
    Router: {
        push: jest.fn(),
    },
}));

global.nextRouterMock = nextRouterMock;